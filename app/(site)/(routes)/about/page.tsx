import { Bounded } from "@/components/bounded"
import { ContactForm } from '@/components/contact-form'

const AboutPage = () => {
  return (
    <Bounded>
      <div className="flex flex-col justify-center max-w-2xl mx-auto py-[80px] gap-y-6">
        <h2 className="mt-16 text-3xl font-bold md:text-5xl">About</h2>
        <div className="mt-24 space-y-6">
          <h4 className="text-xl font-bold md:text-2xl">Background</h4>
          <p className="text-base font-medium leading-6 text-foreground/60">
            I&apos;m a software engineer with a background in design. I&apos;ve worked on
            projects ranging from small business websites to enterprise applications
            for Fortune 500 companies.
          </p>
          <p className="text-base font-medium leading-6 text-foreground/60">
            I&apos;m a software engineer with a background in design. I&apos;ve worked on
            projects ranging from small business websites to enterprise applications
            for Fortune 500 companies.
          </p>
        </div>
        <div className="mt-24 space-y-6">
          <h4 className="text-xl font-bold md:text-2xl">Interest</h4>
          <p className="text-base font-medium leading-6 text-foreground/60">
            I&apos;m interested in the intersection of design and technology. I believe
            that the best products are built by teams that value both.
          </p>
        </div>
        <ContactForm />
      </div>
    </Bounded>
  )
}

export default AboutPage