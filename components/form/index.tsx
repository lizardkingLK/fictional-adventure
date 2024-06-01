"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { TooltipComponent } from "@/components/tooltip";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandInput,
  CommandItem,
} from "../ui/command";

const vehicleTypes: readonly [string, ...string[]] = [
  "HATCHBACK",
  "CEDAN",
  "COUPE",
  "VAN",
  "JEEP",
];

const customers = [
  { label: "English", value: 1 },
  { label: "French", value: 2 },
  { label: "German", value: 3 },
  { label: "Spanish", value: 4 },
  { label: "Portuguese", value: 5 },
  { label: "Russian", value: 6 },
  { label: "Japanese", value: 7 },
  { label: "Korean", value: 8 },
  { label: "Chinese", value: 9 },
] as const;

const formSchema = z.object({
  registration: z.string().min(2, {
    message: "Registration must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  year: z
    .string({ required_error: "Vehicle year is required." })
    .refine((value) => /(1[89][0-9][0-9])/.test(value ?? ""), {
      message: "Vehicle year must be valid.",
    }),
  color: z.string().min(2, { message: "Color must be at least 2 characters." }),
  category: z.enum(vehicleTypes, {
    message: "Vehicle must have a Category.",
  }),
  customer: z.number({ required_error: "Select a valid customer." }),
});

export function VehicleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      registration: "",
      name: "",
      year: "",
      color: "",
      category: undefined,
      customer: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast("Vehicla has been added", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormDescription>Create a new vehicle with fields.</FormDescription>
        <FormField
          control={form.control}
          name="registration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration</FormLabel>
              <FormControl>
                <Input placeholder="Enter registration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input placeholder="Enter year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input placeholder="Enter color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the vehicle category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {vehicleTypes.map((vehicleType, index) => (
                    <SelectItem key={index} value={vehicleType}>
                      {vehicleType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Customer</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? customers.find(
                            (customer) => customer.value === field.value,
                          )?.label
                        : "Select customer"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search customer..." />
                    <CommandEmpty>No customer found.</CommandEmpty>
                    <CommandGroup>
                      <CommandList className="w-full">
                        {customers.map((customer) => (
                          <CommandItem
                            key={customer.value}
                            value={customer.label}
                            onSelect={() => {
                              form.setValue("customer", Number(customer.value));
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === customer.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {customer.label}
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-4">
          <TooltipComponent message="Go Back">
            <Link href="/dashboard/vehicles">Cancel</Link>
          </TooltipComponent>
          <TooltipComponent message="Add Vehicle">
            <Button type="submit">Create</Button>
          </TooltipComponent>
        </div>
      </form>
    </Form>
  );
}
