"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Heading } from "./heading"
import { Textarea } from "./ui/textarea"

const schema = z.object({
  name: z.string().trim().min(3).max(20),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(1000)
})

type FormValues = z.infer<typeof schema>

export const ContactForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = async (values: FormValues) => {
    try {
      console.log(values)

      router.refresh()
      router.push('/');
      toast.success("Message sent!")
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong!")
    } finally {
      form.reset()
      setIsLoading(false)
    }
  }

  return (
    <>
      <h2 className="mt-16 text-3xl font-bold md:text-5xl">
        Contact
      </h2>
      <div className="grid grid-cols-1 gap-20 mt-24 md:grid-cols-2">
        <div className="space-y-8 text-foreground/60">
          <h4 className="font-bold">Let&apos;s chat!</h4>
          <p className="text-base font-medium leading-6 ">
            If you have any questions, opportunities or would just like to say hey then feel free to fill out my contact form and I&apos;ll endeavour to get back to you as soon as I can.
          </p>
          <p className="text-base font-medium leading-6">
            Or if you would prefer to, you can also reach me on twitter and discord.
          </p>
        </div>
        <Form {...form}>
          <form
            className="w-full space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Type your name here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Type your email here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here"
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading} className="ml-auto" type="submit">
              Send
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}