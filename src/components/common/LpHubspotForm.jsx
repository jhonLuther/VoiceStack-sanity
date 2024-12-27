import { useEffect, useRef } from "react";

const LpHubSpotForm = () => {
  const formWrapperRef = useRef(null);

  useEffect(() => {
    const scriptFetched = false;

    // Function to inject HubSpot script
    const injectScript = () => {
      if (!scriptFetched && typeof window !== "undefined") {
        const scriptEl = document.createElement("script");

        scriptEl.setAttribute("charset", "utf-8");
        scriptEl.setAttribute("type", "text/javascript");
        scriptEl.src = "//js.hsforms.net/forms/v2.js";

        scriptEl.onload = () => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "4832409",
              region: "na1",
              formId: "39dd213e-7941-4747-b9ae-e7dbadf9a085",
              // target: `#lpForm`,
              target: "#hubspotForm",
              inlineMessage:
                "Thank you, a VoiceStack representative will reach out to you shortly.",
              onFormReady: function (form, ctx) {
                const email = localStorage.getItem("email");
                if (email) {
                  const emailInput = form.querySelector(
                    'input[name="email"]'
                  ) ;
                  if (emailInput) {
                    emailInput.value = email;
                  }
                }
              },
              onFormSubmit: function (form) {
                const emailInput = form.querySelector(
                  'input[name="email"]'
                ) ;
                if (emailInput) {
                  const email = emailInput.value;
                  setTimeout(() => {
                    if (typeof window !== "undefined" && window.dataLayer) {
                      window.dataLayer.push({
                        event: "lp_demo_submission",
                        email: "example@example.com",
                      });
                    }
                  }, 250);
                }
              },
            });
          }
        };

        document.body.appendChild(scriptEl);
      }
    };

    injectScript();

    return () => {
      // Cleanup: Remove the HubSpot script if necessary
      const existingScript = document.querySelector(
        'script[src="//js.hsforms.net/forms/v2.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
      <div
        id="hubspotForm"
        ref={formWrapperRef}
        className="text-gray-950 w-full flex flex-col"
      ></div>
  );
};

export default LpHubSpotForm;
