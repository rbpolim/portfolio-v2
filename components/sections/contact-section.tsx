import { Button } from "@/components/ui/button"
import { Bounded } from "@/components/bounded"
import { Heading } from "@/components/heading"

export const ContactSection = () => {
  return (
    <Bounded>
      {/* <Heading title="contact" /> */}
      <div className="flex flex-col mt-16 text-lg text-center md:text-2xl gap-y-10">
        <p>
          Im currently open to freelance and actively looking for a full-time job opportunities, so if you like what you&apos;ve seen please don&apos;t hesitate to get in touch!
        </p>
        <p>
          If you have any questions or would just like to say hi, my inbox is always open and ill endeavour to he back to you as soon as I can
        </p>
        <div>
          <Button size="lg">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </Bounded>
  )
}
