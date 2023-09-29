import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-80px)]">
      <div className="flex flex-col h-full justify-evenly">
        <div className="space-y-4">
          <div className="flex items-center text-2xl gap-x-2">
            <p className="font-bold ">
              Hi, I am Rodrigo Polim.
            </p>
            <p className="font-light">
              Welcome to my website
            </p>
          </div>
          <h1 className="text-6xl font-black">
            Fullstack Developer
          </h1>
          <p className="text-xl font-bold">
            Passionate about technology and it&apos;s possibilities
          </p>
        </div>
        <div>
          <Button size='lg'>
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  )
}
