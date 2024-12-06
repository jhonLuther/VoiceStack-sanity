import Image from 'next/image'
import Pinpoint from './Pinpoint'

const CustomerCard = ({ imageUrl, topText, topSubText, bottomText }) => {
  const bottom = bottomText.trim().split(',')
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-tr from-[#4b11a1] to-[#b700f4] gap-4 items-center md:flex-row  text-white">
      <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#5b1bb3]/60  to-transparent "></div>
      <div className="pt-10 pl-8">
        <Image src={imageUrl} width={300} height={300} alt={''} />
        <div className="absolute top-8">
          <p className="text-white text-xl font-semibold ">{topText}</p>
          <p className="text-white/70 flex flex-row gap-2 items-center">
            <Pinpoint />
            <span>{topSubText}</span>
          </p>
        </div>
        <div className="absolute bottom-5">
          <span className="text-lg font-semibold">{bottom[0]}</span>
          <span className="text-white/90 text-lg font-normal">, {bottom[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
