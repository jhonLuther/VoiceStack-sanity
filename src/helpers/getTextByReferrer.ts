const getTextByReferrer = (refer: string | null, data: any[]) => {
    const keyMap: Record<string, string> = {
      carestack: "cs",
      fmc: "fmc",
    };
  
    // Get the key from the map, or use "default" if not found
    const key = keyMap[refer as keyof typeof keyMap] || "default";
  
    return data.find((item) => item["_key"] === key)?.value || "";
  };

export default getTextByReferrer;