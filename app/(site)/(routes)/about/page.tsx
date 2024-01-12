import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Bounded } from "@/components/bounded";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <Bounded className="py-28">
      <div className="w-full max-w-2xl mx-auto flex flex-col my-20 gap-y-20">
        <div className="space-y-8">
          <Heading className="font-black">About</Heading>
          <Heading size="sm" asChild>
            <h3>Background</h3>
          </Heading>
          <Text>
            I&apos;m a Frontend developer with a real love for crafting digital
            experiences. Professionally, I've been immersed in web and mobile
            development since 2021, diving deep into technologies like
            Typescript, React.js, Next.js, React Native, and Node.js. While I
            excel in these stacks, I'm also open and adaptable to exploring
            other languages and technologies.
          </Text>
          <Text>
            My expertise extends beyond coding; I delve into crucial areas like
            Design, Infrastructure, and Database management, driven by my
            passion and broad knowledge.
          </Text>
          <Text>
            To further my tech know-how, I'm focused on advancing my studies in
            Systems Analysis and Development, honing my skills in Frontend
            technologies, and bolstering my interpersonal abilities to stay
            abreast of market shifts.
          </Text>
          <Heading size="sm" asChild>
            <h3>Interest</h3>
          </Heading>
          <Text>
            I&apos;m interested in the intersection of design and technology. I
            believe that the best products are built by teams that value both.
          </Text>
        </div>
        {/* <Separator /> */}
        {/* <div className="space-y-8">
          <Heading className="font-black">Tools & Technologies</Heading>
          <Text>Here are some of the tools I use most frequently.</Text>
          <div className="grid grid-cols-4 gap-10 pt-10">
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/icons/typescript.svg"}
                width={60}
                height={60}
                alt={"typescript"}
              />
              <Text>TypeScript</Text>
            </div>
          </div>
        </div> */}
        <Separator />
        <ContactForm />
      </div>
    </Bounded>
  );
};

export default AboutPage;
