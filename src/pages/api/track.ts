import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "~/utils/tracker/supabase";

export default async function trackEvents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allowedMethods = ["GET", "POST", "PATCH"];
  if (!allowedMethods.includes(req.method!)) {
    return res.status(405).json({ error: "Method Not Allowed", allowedMethods });
  }

  if (!req.body) {
    return res.status(400).json({ error: "Invalid request, body is required" });
  }

  try {
    if (req.method === "POST") {
      const type = req.query.type;
      if (!type) {
        return res.status(400).json({ error: "Missing type query parameter" });
      }

      switch (type) {
        case "user":
          const id = await createUser(req.body);
          return res.status(200).json({ userId: id });

        case "event":
          await addEvent(req.body.events);
          return res.status(200).json({ msg: "success" });

        case "session":
          const sessionId = await addSession(req.body.session);
          return res.status(200).json({ id: sessionId });

        default:
          return res.status(400).json({ error: "Invalid type" });
      }
    }

    if (req.method === "PATCH") {
      const type = req.query.type;
      if (!type) {
        return res.status(400).json({ error: "Missing type query parameter" });
      }

      switch (type) {
        case "session":
          const id = req.query.id;
          const data = req.body;
          const update = await updateSession(id, data);
          return res.json({ msg: update ? "success" : "Error" });

        case "user":
          const updatedId = await patchUser(req.body);
          return res.json({ id: updatedId });

        default:
          return res.status(400).json({ error: "Invalid type" });
      }
    }

    if (req.method === "GET") {
      const type = req.query.type;
      if (type === "user") {
        const id = req.query.id;
        const query = await supabase.from("users").select("*").eq("id", id);
        return res.json(query.data?.[0] ?? null);
      }
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createUser(data: any) {
  const { data: result, error } = await supabase.from("users").insert(data).select("id").single();
  if (error) throw error;
  return result.id;
}

async function addEvent(data: any) {
  const { error } = await supabase.from("events").insert(data);
  if (error) throw error;
}

async function addSession(data: any) {
  const product_id = process.env.CSTRACKER_PRODUCT_ID;
  const { data: result, error } = await supabase
    .from("sessions")
    .insert({ ...data, product_id })
    .select("id")
    .single();
  if (error) throw error;
  return result.id;
}

async function updateSession(id: any, data: any) {
  const { error } = await supabase.from("sessions").update(data).eq("id", id);
  if (error) throw error;
  return true;
}

async function patchUser(data: any) {
  const { data: result, error } = await supabase
    .from("users")
    .update(data)
    .eq("id", data.id)
    .select("id")
    .single();
  if (error) throw error;
  return result.id;
}
