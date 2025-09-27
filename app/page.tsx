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
        <div className="relative w-[400px] h-[400px] mx-auto overflow-hidden rounded-full border border-gray-300 shadow-inner bg-gradient-to-br from-white to-gray-100">
  <Image
    src="/images/logo-2.jpg"
    alt="Display of golden/brass utensils and decor from the shop’s Instagram gallery"
    fill
    className="object-cover"
    priority
    sizes="100vw"
  />
</div>
      </div>
      <div className="max-w-xl mx-auto">
  <div className="relative aspect-video rounded-lg border border-gray-300 shadow-inner bg-gradient-to-br from-white to-gray-100 overflow-hidden">
    <Image
      src="/images/store-interior.jpg"
      alt="Display of golden/brass utensils and decor from the shop’s Instagram gallery"
      fill
      className="object-cover"
      priority
      sizes="100vw"
    />
  </div>
  <p className="mt-4 text-center text-sm text-gray-700">
    Visit the store or contact us for orders — available in bulk or individual pieces.
  </p>
</div>
    </section>
  )
}
