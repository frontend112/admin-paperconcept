"use client"
import React, { FC } from 'react'
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import SelectStore from "@/components/select-store";

const formSchema = z.object({
  storeName: z.string().min(1)
})

interface Props {
  title: string;
}

const AddStore: FC<Props> = ({ title }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [title]: "",
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    // here I should use prisma && axois to push into database
    axios.post(`/api/stores/${data}`)
  }
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-4">+</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add a new {title}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{title} name</FormLabel>
                  <FormControl>
                    <Input placeholder="new name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <aside className="flex justify-end w-full">
              <Button type="submit" className="h-6 mt-6">Add</Button>
            </aside>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddStore