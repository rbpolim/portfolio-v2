import { Bounded } from "@/components/bounded"
import { Button } from "@/components/ui/button"
import { EarthCanvas } from '@/components/earth-canvas'

export const HeroSection = () => {
  return (
    <Bounded className="flex items-center h-screen">
      <div className="grid h-full md:grid-cols-2 place-items-center">
        <div className="flex flex-col items-start justify-between w-full h-full space-y-4 max-h-96">
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
          <Button size='lg'>
            GET IN TOUCH
          </Button>
        </div>
        <div className="absolute inset-0 w-full h-full blur-sm md:blur-0 md:static -z-50 md:z-0">
          <EarthCanvas />
        </div>
      </div>
    </Bounded>
  )
}
