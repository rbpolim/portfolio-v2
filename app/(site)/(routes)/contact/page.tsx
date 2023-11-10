"use client"

import { useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import toast from 'react-hot-toast'

import { Bounded } from "@/components/bounded"
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

const schema = z.object({
  username: z.string().trim().min(3).max(20),
  subject: z.string().trim().min(3).max(20),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(1000)
})

type FormValues = z.infer<typeof schema>

export const ContactPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
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
    <Bounded>
      <Form {...form}>
        <form
          className="w-full space-y-6 pt-[100px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Type your username here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Type your subject here"
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
                    <Input
                      disabled={isLoading}
                      placeholder="Type your message here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} className="ml-auto" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Bounded>
  )
}

export default ContactPage