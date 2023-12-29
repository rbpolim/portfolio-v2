import Image from "next/image";

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
            I&apos;m a software engineer with a background in design. I&apos;ve
            worked on projects ranging from small business websites to
            enterprise applications for Fortune 500 companies.
          </Text>
          <Text>
            I&apos;m a software engineer with a background in design. I&apos;ve
            worked on projects ranging from small business websites to
            enterprise applications for Fortune 500 companies.
          </Text>
          <Heading size="sm" asChild>
            <h3>Interest</h3>
          </Heading>
          <Text>
            I&apos;m interested in the intersection of design and technology. I
            believe that the best products are built by teams that value both.
          </Text>
        </div>
        <Separator />
        <div className="space-y-8">
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
        </div>
        <Separator />
        <ContactForm />
      </div>
    </Bounded>
  );
};

export default AboutPage;
