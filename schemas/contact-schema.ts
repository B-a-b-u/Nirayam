import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name is required"),

    email: z
        .email("Enter a valid email"),

    phone: z.string().optional(),

    company: z.string().optional(),

    service: z
        .string()
        .min(1, "Please select a service"),

    otherService: z.string().optional(),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;