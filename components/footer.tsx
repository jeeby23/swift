import { Container } from '@/shared/container'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#F1100E] text-white ">
      <Container>
        {/* Main footer */}
        <section>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[300px] md:min-h-[420px] my-4">
            <Image
              src="/swift-footer.jpg"
              alt="Swift Argentina"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E2241B]">
              Get in touch
            </p>

            <h2 className="mb-8 font-garamond text-4xl font-bold">
              Contact Us
            </h2>

            <div className="space-y-7">
              {/* Address */}
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Address
                </h3>

                <address className="max-w-lg text-base not-italic leading-7 text-white/85">
                  AV. JUAN DOMINGO PERON S/N – VILLA GOBERNADOR GALVEZ –
                  SANTA FE, ARGENTINA
                </address>
              </div>

              {/* Swift Beef */}
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Swift Beef
                </h3>

                <address className="max-w-lg text-base not-italic leading-7 text-white/85">
                  Thomas Edison 2659 3°. Martinez, Buenos Aires
                  <br />
                  CP: 1640, Argentina
                </address>
              </div>

              {/* Email */}
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Email
                </h3>

                <a
                  href="mailto:info@swift-argentina.com"
                  className="text-base text-white transition-colors hover:text-[#E2241B]"
                >
                  info@swift-argentina.com
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
       
        {/* Bottom bar */}
      </Container>
       <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between bg-[#011627]">
          <p>
            © 2026 Swift Argentina SA. All rights reserved.
          </p>

          <p>
            Powered by{' '}
            <span className="font-semibold text-white">
              SWIFT ARGENTINA SA
            </span>
          </p>
        </div>
    </footer>
  )
}