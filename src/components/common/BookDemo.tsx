import { useContext, useEffect, useState } from 'react'
import { BookDemoContext } from '~/providers/BookDemoProvider'

const BookDemo = () => {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext)
  const [isFormLoaded, setIsFormLoaded] = useState(false)

  useEffect(() => {
    const scriptId = 'hubspot-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.type = 'text/javascript'
      script.id = scriptId
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: '4832409',
            formId: '496f73f1-b6f5-4417-90c0-8cc7c36f35e5',
            target: '#hubspot-form',
          })
          setIsFormLoaded(true)
        }
      }
      document.body.appendChild(script)
    } else {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '4832409',
          formId: '496f73f1-b6f5-4417-90c0-8cc7c36f35e5',
          target: '#hubspot-form',
        })
        setIsFormLoaded(true)
      }
    }
  }, [])

  return (
    <div
      className={`modal-overlay fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isDemoPopUpShown ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => setIsDemoPopUpShown(false)}
    >
      <div
        className="modal-container bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[400px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-700"
          onClick={() => setIsDemoPopUpShown(false)}
        >
          &times;
        </button>

        {isFormLoaded ? (
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Book Free Demo
            </h2>
            <p className="text-sm text-gray-600">
              Start your transition to OS Dental. <br />
              Book a demo with us today.
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500">Loading form...</p>
        )}
        <div id="hubspot-form"></div>
      </div>
    </div>
  )
}

export default BookDemo
