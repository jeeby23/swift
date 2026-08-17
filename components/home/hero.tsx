import { Button } from "../ui/button"

export default function Hero() {
  return (
    <>
      <div className="fixed min-h-screen inset-0 -z-10 flex flex-col">
        <div
          className="h-[42vh] min-h-[220px] bg-cover bg-center sm:h-[48vh]"
          style={{ backgroundImage: "url('/Hero-Image.webp')" }}
        />
        <div className="flex-1 bg-[#C4B3AE]" />
      </div>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 my-7  text-center ">
        <p className="font-garamond text-[#DD183B] text-[18px] leading-[22px] ">Welcome To</p>
        <h1 className="pt-3 font-garamond font-semibold leadindg-[59px] md:leading-[98px] tracking-wide text-[#DD183B] uppercase text-[42px] sm:text-[70px] ">
          Swift Argentina S.A
        </h1>
        <Button className="mt-4 rounded-full bg-[#DD183B] px-8 py-5 text-base text-white hover:brightness-110">
          Learn More
        </Button>
      </section>
    </>
  )
}