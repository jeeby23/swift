import { Container } from '@/shared/container'
import { Button } from '../ui/button'

export default function Objective() {
  return (
    <section className="bg-[#E6E6E6]">
      <Container>
        <div className="flex flex-col items-center py-20 text-center md:py-28">
          <p className="font-garamond text-sm font-semibold tracking-[0.15em] text-[#DD183B] uppercase sm:text-base">
            Swift Beef Added Value
          </p>

          <h1 className="mt-4 max-w-3xl font-garamond text-[40px] leading-tight font-[400px] text-[#1B2233] sm:text-[44px] md:text-[40px]">
            Premium Argentina Meats Supplier Approved Plant 13 &amp; 1373
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-6">
            <p className="text-base  leading-[27px] md:leading-[30px] text-[rgb(58,58,58)] text-[15px] md:text-base font-normal ">
              Swift Argentina SA objective is to develop, produce and market high value-added,
              healthy, safe and tasty meat products, aimed at both end consumers and large food
              companies.
            </p>
            <p className="text-base leading-[27px] md:leading-[30px] text-[#3a3a3a] text-[15px] md:text-base">
              Swift Argentina SA, like the world &apos;s leading food companies, exercises the most
              complete and rigorous quality and health controls, which begin with the traceability
              of the animals and continue throughout the entire industrial process, up to the final
              packaging segment.
            </p>
          </div>

          <Button className="mt-10 rounded-full bg-[#DD183B] px-10 py-5.5 text-sm font-semibold tracking-widest text-white uppercase hover:brightness-110">
            -Values-
          </Button>
        </div>
      </Container>
    </section>
  )
}
