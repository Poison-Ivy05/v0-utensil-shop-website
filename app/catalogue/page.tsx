import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: "brass-thali",
    title: "Brass Pooja Thali Set",
    material: "Brass",
    description: "Traditional handcrafted thali set — ideal for ceremonies and gifting.",
    image: {
      width: 800,
      height: 600,
      alt: "Brass pooja thali set",
      url: "/handcrafted-brass-pooja-thali-set-on-display.jpg",
    },
  },
  {
    id: "copper-bottle",
    title: "Copper Water Bottle",
    material: "Copper",
    description: "Pure copper bottle for daily use and wellness.",
    image: {
      width: 800,
      height: 600,
      alt: "Copper water bottle",
      url: "/polished-copper-water-bottle-on-wooden-surface.jpg",
    },
  },
  {
    id: "steel-dinner",
    title: "Steel Dinner Set",
    material: "Steel",
    description: "Durable stainless steel dinner set for everyday family meals.",
    image: {
      width: 800,
      height: 600,
      alt: "Steel dinner set",
      url: "/stainless-steel-dinner-set-neatly-arranged.jpg",
    },
  },
  {
    id: "brass-kadhai",
    title: "Brass Kadhai",
    material: "Brass",
    description: "Thick brass kadhai for even heating and traditional cooking.",
    image: {
      width: 800,
      height: 600,
      alt: "Brass kadhai",
      url: "/golden-brass-kadhai-utensil-close-up.jpg",
    },
  },
  {
    id: "copper-lota",
    title: "Copper Lota",
    material: "Copper",
    description: "Classic copper lota with polished finish.",
    image: {
      width: 800,
      height: 600,
      alt: "Copper lota",
      url: "/shiny-copper-lota-traditional-container.jpg",
    },
  },
  {
    id: "steel-casserole",
    title: "Steel Casserole",
    material: "Steel",
    description: "Insulated stainless casserole for hot meals.",
    image: {
      width: 800,
      height: 600,
      alt: "Steel casserole",
      url: "/stainless-steel-casserole-with-lid.jpg",
    },
  },
] as const

export default function CataloguePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-balance">Catalogue</h1>
        <p className="text-muted-foreground mt-2">
          A selection of our popular utensils and gift items. Contact us for the full range, customization, and pricing.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p as any} />
        ))}
      </div>
    </section>
  )
}
