"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useMutation } from "@tanstack/react-query"
import { apiRequest } from "@/lib/queryClient.js"
import { useToast } from "@/hooks/use-toast.js"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Textarea } from "@/components/ui/textarea.jsx"
import { Button } from "@/components/ui/button.jsx"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { insertMessageSchema } from "@shared/schema.js"

export default function Contact() {
  const { toast } = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const mutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      form.reset()
      setFormSubmitted(true)

      // Reset the success state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    },
  })

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background/80"
    >
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-card/50 backdrop-blur-sm dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setFormSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-card/50 backdrop-blur-sm dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-lg p-6 md:p-8"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              {...field}
                              className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                              placeholder="your.email@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 min-h-[120px]"
                              placeholder="Tell me about your project or inquiry..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden"
                      disabled={mutation.isPending}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {mutation.isPending ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      )}
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

