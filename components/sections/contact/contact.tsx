import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-border/40 bg-background border-t py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-heading">
            Let's Build Something Great Together
          </h2>

          <p className="text-muted mx-auto mt-4 max-w-2xl">
            Tell us about your project and we'll get back to you within one
            business day.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}