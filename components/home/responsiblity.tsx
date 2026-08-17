import {Container} from "@/shared/container"
import Image from "next/image"

export default function Responsibility() {
  return (
    <>
      <section className="bg-white">
        <Container>
          <div className="flex flex-col items-center py-5 text-center text-[#3A3A3A] italic">
            <p className="py-3 text-[15px] leading-[27px] font-normal italic">
              We are aware of the responsibility that comes with working in a food production
              company, and each of us strives for excellence in our own task.
            </p>
            <p className="py-3 text-[15px] leading-[27px] font-normal italic">
              We share the daily work with more than 1900 people, including operators,
              administrative staff, and professionals.
            </p>
            <p className="py-3 text-[15px] leading-[27px] font-normal italic">
              In an atmosphere of mutual respect, we strive to form a true working community.
            </p>
            <p className="py-3 text-[15px] leading-[27px] font-normal italic">
              The foundation of our company&apos;s success is the adoption, identification, and loyalty
              of our employees to the company&apos;s values and principles.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#FFEDE6] py-3">
        <Container>
          <div className="relative h-[120px] w-full overflow-hidden sm:h-[200px] md:h-[220px]">
            <Image
              src="/scaled.webp"
              alt="Grilled beef patty on a wooden board"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </div>
        </Container>
      </section>
    </>
  )
}