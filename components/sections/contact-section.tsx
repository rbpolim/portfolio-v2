import { Button } from "../ui/button"

export const ContactSection = () => {
  return (
    <section className="h-screen">
      <div className="flex items-center gap-x-4">
        <h2 className="font-black text-7xl">
          contact
        </h2>
        <div className="w-full h-1 rounded-full bg-neutral-800" />
      </div>
      <div className="border-2 border-red-200">
        <span>
          Im currently open to freelance and actively looking for a full-time job opportunities, so if you like what you&apos;ve seen please don&apos;t hesitate to get in touch!
        </span>
        <span>
          If you have any questions or would just like to say hi, my inbox is always open and ill endeavour to he back to you as soon as I can
        </span>
        <Button>
          GET IN TOUCH
        </Button>
      </div>
    </section>
  )
}
