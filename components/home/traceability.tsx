import Image from 'next/image'
import { Button } from '../ui/button'
import { Container } from '@/shared/container'

const items = [
  {
    image: '/beef.png',
    title: 'Swift Angus, Hereford & Wagyu',
    content:
      'The quality of our products begins with traceability. We identify the cattle, the carcasses and the products with a unique number that allows them to be traced from their farm of origin through their transformation processes up until they reach the end consumer.',
  },
  {
    image: '/pork.png',
    title: 'Duruc',
    content:
      'The information from our processes is supported with modern software and real-time records, thus guaranteeing our customers complete reliability.',
  },
  {
    image: '/chicken.png',
    title: 'Adopt The Pace Of Nature',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
]

export default function Traceability() {
  return (
    <>

        <section className="bg-[#E7E7E7] px-6 py-16">
          <div className="mx-auto max-w-6xl text-center">
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-[#171717] text-[18px]">
              SWIFT ARGENTINA ENVIRONMENTAL MANAGEMENT
            </h4>

            <h1 className="mb-12 text-4xl font-normal  text-[#C22F3D] sm:text-4xl leading-[52px]">
              TRACEABILITY AND QUALITY ASSURANCE
            </h1>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
            {items.map((item) => (
              <div key={item.title}>
                <div className="w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={565}
                    height={452}
                    className="h-auto w-full"
                  />
                </div>

                <div className="mt-6">
                  <h2 className="mb-3 font-garamond text-xl font-semibold leading-[24px] text-[#171717]">
                    {item.title}
                  </h2>

                  <p className="text-base leading-7 text-[#4a4a4a]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#E7E7E7]">
                
          <div
            className="bg-repeat-x h-[197.68px] md:h-[130px] flex flex-col md:flex-row gap-3  items-center md:justify-around"
            style={{ backgroundImage: "url('/swift.jpg')" }}
          >
            <h4 className="text-[26px] text-[rgb(180,20,49)] font-garamond text-center">
              Swift Argentina SA Beef To achieve these objectives, we commit to:
            </h4>
            <Button className="text-white bg-red-500 rounded-full p-5">Learn More</Button>
          </div>
            <Container>
          <div className="text-center flex items-center justify-center ">
            <p className="py-2 max-w-[1000px] ">
              South American leading supplier of Frozen and Chilled Beef meat cuts, Biggest Market
              in China, Vietnam and USA. Animal Slaughtering and Processing PLANT 13 & 1372
              Argentina and Specialty Food Manufacturing,. Beef products, from Angus and Hereford
              cattle .
            </p>
          </div>
      </Container>
        </section>
    </>
  )
}
