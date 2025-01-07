import { useEffect } from 'react'

const HubSpotForm = ({
  id,
  eventName,
}: {
  id?: string
  eventName?: string

}) => {

  console.log(id,eventName)
  useEffect(() => {
    const window2: any = window
    const loadHubSpotScript = async () => {
      // Ensure script is only fetched once
      if (
        !document.querySelector(`script[src="//js.hsforms.net/forms/v2.js"]`)
      ) {
        const scriptEl = document.createElement('script')
        scriptEl.setAttribute('charset', 'utf-8')
        scriptEl.setAttribute('type', 'text/javascript')
        scriptEl.src = '//js.hsforms.net/forms/v2.js'

        // Append the script to the document body
        document.body.appendChild(scriptEl)

        // Wait for the script to load
        scriptEl.onload = () => {
          if (window.hbspt) {
            // Create the form
            window.hbspt.forms.create({
              portalId: '4832409',
              region: 'na1',
              formId: id || '6b2d6906-028e-4d65-9cd1-34d528e0d5c0',
              // formId: id || "cf4c05ce-6c22-43a1-90a7-d0fc94c239fd",
              
              target: '#hubspotForm',
              inlineMessage:
                'Thank you, a VoiceStack representative will reach out to you shortly.',
              onFormReady: function ($form, ctx) {
                // Prefill email from localStorage if available
                const savedEmail = localStorage.getItem('email')
                if (savedEmail) {
                  const emailInput = $form.querySelector('input[name="email"]')
                  if (emailInput) {
                    emailInput.value = savedEmail
                    emailInput.focus()
                  }
                }
              },
              onFormSubmit: function (form) {
                setTimeout(async () => {
                  const email = form.querySelector('input[name="email"]').value
                  window2.dataLayer.push({
                    email: email,
                    event: eventName || 'demo_submission_uk',
                  })
                  const urlParams = new URLSearchParams(window.location.search);
                  const responseData = await fetch(
                    `/api/hs?email=${email}&source=${urlParams.get("utm_source")}&campaign=${urlParams.get("utm_campaign")}&medium=${urlParams.get("utm_medium")}&term=${urlParams.get("utm_term")}&lead_source=${urlParams.get("lead_source")}`
                  );  
                }, 250)
              },
            } as any)
          }
        }
      }
    }

    loadHubSpotScript()

    // Cleanup the script if necessary
    return () => {
      const hubspotScript = document.querySelector(
        `script[src="//js.hsforms.net/forms/v2.js"]`,
      )
      if (hubspotScript) hubspotScript.remove()
    }
  }, [id, eventName])

  return <div id="hubspotForm"></div>
}

export default HubSpotForm
