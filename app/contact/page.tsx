export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">Reach out for product inquiries, bulk orders, and custom gifting.</p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-lg border p-4">
          <h2 className="font-medium">Store Details</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:Jitendrasumani28@gmail.com">
                Jitendrasumani28@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a className="underline" href="tel:+919956223737">
                +91 99562 23737
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                className="underline"
                href="https://instagram.com/newshriharibartan"
                target="_blank"
                rel="noopener noreferrer"
              >
                @newshriharibartan
              </a>
            </li>
            <li>Location: Lucknow · Yahiyaganj Bartan Bazar</li>
            <li>
              Reviews:{" "}
              <a
                className="underline"
                href="https://g.page/r/CSLe5Rfs4orLEBI/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-medium">Quick Message</h2>
          <p className="text-sm text-muted-foreground">Use your email app to write to us directly.</p>
          <div className="mt-3">
            <a
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90"
              href="mailto:Jitendrasumani28@gmail.com?subject=Enquiry%20from%20Website&body=Hello%2C%0A%0AI%27d%20like%20to%20know%20more%20about..."
            >
              Email Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
