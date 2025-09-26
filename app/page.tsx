import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2 items-center">
      <div className="space-y-6">
        <span className="inline-block text-xs font-medium tracking-wide px-2 py-1 rounded bg-brand/15 text-brand">
          Since 1970 · Lucknow
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-balance">New Shri Hari Bartan Palace</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Premium brass, copper, and steel utensils for homes and businesses. Handcrafted and durable designs trusted by
          thousands of customers.
        </p>
        <div className="flex items-center gap-3">
          <Button asChild className="bg-brand text-brand-foreground hover:opacity-90">
            <Link href="/catalogue">Browse Catalogue</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Follow us on{" "}
          <a
            className="underline"
            href="https://instagram.com/newshriharibartan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @newshriharibartan
          </a>
        </p>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
          <Image
            src="/images/img-mama.jpg"
            alt="Display of golden/brass utensils and decor from the shop’s Instagram gallery"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
