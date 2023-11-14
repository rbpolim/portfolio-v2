import { Text } from "@/components/text"
import { Heading } from "@/components/heading"
import { Bounded } from "@/components/bounded"
import { ContactForm } from '@/components/contact-form'

const AboutPage = () => {
  return (
    <Bounded className="py-28">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <Heading>About</Heading>
        <Heading size="sm" asChild>
          <h3>Background</h3>
        </Heading>
        <Text>
          I&apos;m a software engineer with a background in design. I&apos;ve worked on projects ranging from small business websites to enterprise applications for Fortune 500 companies.
        </Text>
        <Text>
          I&apos;m a software engineer with a background in design. I&apos;ve worked on projects ranging from small business websites to enterprise applications for Fortune 500 companies.
        </Text>
        <Heading size="sm" asChild>
          <h3>Interest</h3>
        </Heading>
        <Text>
          I&apos;m interested in the intersection of design and technology. I believe that the best products are built by teams that value both.
        </Text>
        <ContactForm />
      </div>
    </Bounded>
  )
}

export default AboutPage