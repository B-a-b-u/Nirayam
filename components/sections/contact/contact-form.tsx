"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
    contactSchema,
    ContactFormValues,
} from "@/schemas/contact-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Loader2, Send } from "lucide-react";

const services = [
    "Web Development",
    "Mobile Applications",
    "AI Solutions",
    "Business Automation",
    "Other",
];


export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            otherService: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);

  
            // API comes next
            // await fetch("/api/contact")

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            toast.success("Form Submitted Successfully!");

            reset();
        }
        catch(error){
            toast.error("Something went wrong! Please Try Again.");
        }
        finally {
            setLoading(false);
        }
    };

    const selectedService = watch("service");

    return (
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-heading">
                    Tell us about your project
                </h3>

                <p className="mt-2 text-body">
                    Fill out the form below and our team will
                    get back to you within one business day.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                
            >
                {/* Row 1 */}

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Full Name *
                        </label>

                        <Input
                            placeholder="Your Name"
                            disabled={loading}
                            {...register("name")}
                        />

                        {errors.name && (
                            <p className="mt-2 text-sm text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Email *
                        </label>

                        <Input
                            type="email"
                            placeholder="user@example.com"
                            disabled={loading}
                            {...register("email")}
                        />

                        {errors.email && (
                            <p className="mt-2 text-sm text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                </div>

                {/* Row 2 */}

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Phone
                        </label>

                        <Input
                            placeholder="+91 XXXXX XXXXX"
                            disabled={loading}
                            {...register("phone")}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Company
                        </label>

                        <Input
                            placeholder="ABC Pvt Ltd"
                            disabled={loading}
                            {...register("company")}
                        />
                    </div>

                </div>


                {/* Row 3 */}

                <div className="grid gap-6 md:grid-cols-2">

                    {/* Service */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Required Service *
                        </label>

                        <Select
                            value={watch("service")}
                            disabled={loading}
                            onValueChange={(value) =>
                                setValue("service", value, {
                                    shouldValidate: true,
                                })
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Service" />
                            </SelectTrigger>

                            <SelectContent>
                                {services.map((service) => (
                                    <SelectItem
                                        key={service}
                                        value={service}
                                    >
                                        {service}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {errors.service && (
                            <p className="mt-2 text-sm text-destructive">
                                {errors.service.message}
                            </p>
                        )}
                    </div>



                    {/* Other Service */}
                    <div>
                        {watch("service") === "Other" && (
                            <>
                                <label className="mb-2 block text-sm font-medium">
                                    Specify Service *
                                </label>

                                <Input
                                    disabled={loading}
                                    placeholder="Describe your required service"
                                    {...register("otherService")}
                                />

                                {errors.otherService && (
                                    <p className="mt-2 text-sm text-destructive">
                                        {errors.otherService.message}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Message */}

                <div>

                    <label className="mb-2 block text-sm font-medium">
                        Project Description or Query *
                    </label>

                    <Textarea
                    disabled={loading}
                        rows={7}
                          className="min-h-[150px]"

                        placeholder="Tell us about your project..."
                        {...register("message")}
                    />

                    {errors.message && (
                        <p className="mt-2 text-sm text-destructive">
                            {errors.message.message}
                        </p>
                    )}

                </div>

                {/* Button */}

                <Button
                    className="w-full"
                    size="lg"
                    disabled={loading}
                    type="submit"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>

                <p className="text-center text-sm text-muted">
                    We'll respond within one business day.
                    Your information is kept confidential.
                </p>

            </form>
        </div>
    );
}