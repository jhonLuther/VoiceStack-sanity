import HubspotFormLegal from '~/components/common/HubspotFormLegal'
import Section from '~/components/structure/Section'

function UsAccessOrDeletionRequest() {
  return (
    <div className="w-full flex justify-center py-40 px-8 legal-content">
      <Section className=" w-full md:max-w-5xl flex flex-col">
        <div className="flex flex-col text-center justify-center mb-10">
          <h1 className="text-4xl font-semibold">
          Good Methods Global Inc. dba VoiceStack California Verifiable
          Consumer Access or Deletion Request Form
          </h1>
          {/* <h2 className="text-3xl font-semibold">United Kingdom (the “DPA”)</h2>  */}
        </div>

        <div class="legal">
          <div class="legal--inner">
            <div class="legal_page_body">
              <span>
                <p class="legal__text">
                  Each California resident (“Resident”) has the right to access
                  or delete the personal information held by Good Methods Global 
                  Inc. (“VoiceStack”) about that Resident, including the right to
                  know and access specific information or categories of
                  information that VoiceStack may collect about such Resident,
                  and to have that information provided to you or deleted.
                </p>
                <p class="legal__text">
                  In order for us to respond to your request, we ask that you
                  complete the form below.
                </p>
                <p class="legal__text">
                  We will confirm our receipt of your request within 10 days of
                  its receipt by VoiceStack, and we expect to respond to your
                  request within 45 days of VoiceStack’s receipt of a fully
                  completed form and proof of identity. You do not have to use
                  this form but using this form should make it easier for you to
                  make sure you have provided us with all relevant information
                  and for us to process your request. You may also submit your
                  request via email at <a href="mailto:privacyconcerns@carestack.com">
                    privacyconcerns@carestack.com
                  </a>
                  .
                </p>

                <h2 class="legal__section-title">
                  1. California Resident’s Name and Contact Information
                </h2>
                <p class="legal__text">
                  Please provide the Resident’s information below. If you are
                  making this request on the Resident’s behalf, you should
                  provide your name and contact information in Section 3.
                </p>
                <p class="legal__text">
                  We will only use the information you provide on this form to
                  (i) identify you and the personal information you are
                  requesting access to, (ii) respond to your request, and (iii)
                  keep a record of your request and our response.
                </p>
              </span>
              <HubspotFormLegal formId="190f002f-9f12-4bf1-980f-da026ecea1d7"/>
              <span>
                <h2 class="legal__section-title">
                  2. Proof of Resident’s Identity
                </h2>
                <p class="legal__text">
                  We must verify your identity before we can respond to your
                  access and/or deletion request. We will use the information
                  provided above to verify your identity, but we may request
                  additional information from you to help confirm your identity
                  and to exercise your rights under the California Consumer
                  Privacy Act. We reserve the right to refuse to act on your
                  request if we are unable to identify you, and will notify you
                  in the event that we cannot identify you.
                </p>

                <h2 class="legal__section-title">
                  3. Requests Made by an Authorized Agent on a Resident’s Behalf
                </h2>
                <p class="legal__text">
                  Please complete this section of the form with your name and
                  contact details if you are acting as an authorized agent on
                  the Resident’s behalf.
                </p>
              </span>
              <HubspotFormLegal formId="8ed580f1-7737-4af9-b389-5a0eb8eb0dcb"/>
              <span>
                <h2 class="legal__section-title">4. Resident Request</h2>
              </span>
              <HubspotFormLegal formId="32bf6acd-8a11-4199-af9f-c539b3cc60fd"/>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default UsAccessOrDeletionRequest
