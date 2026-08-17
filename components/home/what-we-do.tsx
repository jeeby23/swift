import Image from 'next/image'
import { Container } from '@/shared/container'

const items = [
  {
    id: 1,
    icon: '/ico1.png',
    content:
      'Quality Doing things right from the start to meet all customer expectations and requirements.',
  },
  {
    id: 2,
    icon: '/ico2.png',
    content:
      'Security Respecting the rules and helping others to respect them as well, in order to avoid accidents and maintain a safe workplace.',
  },
  {
    id: 3,
    icon: '/ico3.png',
    content:
      'Productivity Seeking to make the best use of the resources we have to manage: equipment, raw materials, supplies, time.',
  },
  {
    id: 4,
    icon: '/ico4.png',
    content:
      'Responsibility By treating their job as their own business; following the instructions they receive and observing the rules of discipline, while contributing their initiative and creativity for continuous improvement.',
  },
  {
    id: 5,
    icon: '/ico5.png',
    content:
      'Solidarity Working as a team, sharing concerns and information, and giving and seeking help.',
  },
]

export default function WhatWeDo() {
  return (
    <>
      <section>
        <h2 className="bg-[#E2241B] px-6 py-2 text-center font-garamond font-semibold text-[28px] leading-[40px] font-bold text-white sm:text-[34px] sm:leading-[44px]">
          At Swift Argentina we work with:
        </h2>

        <div className="bg-white">
          <Container>
            <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-6 text-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="h-[119px] w-[107px]"
                  />
                  <p className="text-base leading-[30px] text-[#3a3a3a]">{item.content}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-[#E7E7E7]">
        <div className="flex justify-center px-8 py-3">
          <Image
            src="/Frigorifico.jpeg"
            alt="prime"
            width={1024}
            height={2463}
            className="md:h-[2463px] md:w-[1024px] object-contain"
          />
        </div>
      </section>
    </>
  )
}
