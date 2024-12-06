import H3 from '../typography/H3'
import Paragraph from '../typography/Paragraph'
import ImageLoader from './imageLoader/imageLoader'
import InfoCard from './InfoCard'

const TestimonialCard = ({ props }) => {
  return (
    <div className=" rounded-2xl overflow-hidden bg-gradient-to-tr from-[#4b11a1] via-[#7429ce] to-[#f768d1] max-w-5xl ">
      <div className="flex flex-col  bg-gradient-to-t from-black/20 via-black/10 to-transparent gap-4 items-center md:flex-row  text-white pt-8">
        <ImageLoader
          className="!w-[250px] !h-[250px] rounded-lg overflow-hidden bg-black/20 md:bg-black/0 px-8 md:px-0"
          image={props.AuthorImage}
        />
        <div className="flex flex-col gap-8 pb-8 pr-8 md:pl-4 pl-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <H3 className="text-2xl font-semibold">
                {props?.testimonialheading}
              </H3>
            </div>
            <div>
              <Paragraph className="text-[16px] text-ellipsis md:line-clamp-4">
                {props.testimonialDescription}
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
            <InfoCard
              mainText={props.authorname}
              subTextOne={props.authordesignation}
              subTextTwo={`${props.numberOflocation} Locations, ${props.location}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
