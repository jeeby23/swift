import { Container } from '@/shared/container'

export default function Quality() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/quality-beef.webp')" }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10">
        <Container>
          <div className="relative flex flex-col gap-10 py-16 text-white md:py-24 lg:py-32">
            <h1 className="font-garamond text-[32px] leading-[42px] font-bold sm:leading-[52px] md:absolute md:right-0 md:bottom-[600px]  md:max-w-3 md:text-right lg:max-w-lg lg:text-[46px] lg:leading-[54px]">
              Premium Argentine Beef to Global Markets with Precision, Integrity, Quality,
              Sustainability, and Community.
            </h1>
            <div className="flex flex-col gap-10 md:max-w-md">
              <div className="flex flex-col gap-4">
                <h4 className="font-garamond text-[18px] leading-[22px] font-normal text-[#dd183b]">
                  QUALITY AND SAFETY
                </h4>
                <p className="font-garamond text-[22px] leading-[32px] sm:text-[26px] sm:leading-[34px]">
                  The objective of Swift Argentina SA is to develop, produce and market healthy,
                  safe and appetizing meat products that comply with legal requirements and meet the
                  expectations of our consumers and clients, using methods that avoid polluting the
                  environment.
                </p>
              </div>

              <hr className="border-white/20" />

              <blockquote className="font-garamond text-[20px] leading-[28px] italic sm:leading-[24px]">
                &ldquo;Our meat is highly demanded due to its natural marbling, juiciness,
                tenderness and flavor&rdquo;
              </blockquote>

              <p className="text-[15px] leading-[26px] text-white/90">
                Our beef stands out in international markets because of its exceptional natural
                qualities — developed through Argentina&apos;s rich grazing lands, superior
                livestock genetics, and careful handling from pasture to plate. The natural marbling
                found in our cuts enhances both tenderness and flavor, while our humane and
                hormone-free rearing practices result in meat that&apos;s consistently juicy and
                satisfying. Whether it&apos;s a premium ribeye for a five-star restaurant or lean
                cuts for health-conscious consumers, our beef delivers the signature taste and
                texture that global customers trust and demand.
              </p>

              <hr className="border-white/20" />

              <div className="flex flex-col gap-3">
                <h4 className="font-garamond text-[20px] leading-[26px]">
                  Swift Argentina meats in Malaysian Exclusive Restaurants
                </h4>
                <p className="text-[15px] leading-[26px] text-white/90">
                  From September onwards, our top-tier Argentine meat brands will exclusively
                  feature in Malaysia&apos;s most distinguished restaurants, bringing a taste of
                  Argentina to gourmet dining.
                </p>
              </div>

              <hr className="border-white/20" />

              <div className="flex flex-col gap-3">
                <h4 className="font-garamond text-[20px] leading-[26px]">
                  Swift Argentina Beef in Mainland China Market Expansion
                </h4>
                <p className="text-[15px] leading-[26px] text-white/90">
                  Leveraging our years of successful operations in China, we&apos;re thrilled to
                  announce a significant expansion. We aim to connect more consumers with our
                  high-quality Argentine meats in various regions of this vast and dynamic market.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
