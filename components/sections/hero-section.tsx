import { Button } from "@/components/ui/button"
import { EarthCanvas } from '@/components/earth-canvas'

export const HeroSection = () => {

  return (
    <section className="h-[calc(100vh-100px)]">
      <div className="grid h-full grid-cols-2 pt-32 place-items-center">
        <div className="flex flex-col items-start justify-between h-full max-h-96">
          <div className="space-y-4">
            <div className="flex flex-col items-start text-2xl">
              <p className="font-bold">
                Hi, I am Rodrigo Polim.
              </p>
              <p className="font-light">
                Welcome to my website
              </p>
            </div>
            <h1 className="text-6xl font-black">
              Fullstack Developer
            </h1>
            <p className="text-lg font-bold md:text-xl">
              Passionate about technology and it&apos;s possibilities
            </p>
          </div>
          <div>
            <Button size='lg'>
              GET IN TOUCH
            </Button>
          </div>
        </div>
        <EarthCanvas />
      </div>
    </section>
  )
}
