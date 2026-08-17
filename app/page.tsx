import Hero from '@/components/home/hero'
import Objective from '@/components/home/objective'
import Responsiblity from '@/components/home/responsiblity'
import WhatWeDo from '@/components/home/what-we-do'
import Quality from '@/components/home/quality'
export default function page() {
  return (
    <section>
      <Hero />
      <Objective />
      <Responsiblity/>
      <WhatWeDo/>
      <Quality/>
    </section>
  )
}
