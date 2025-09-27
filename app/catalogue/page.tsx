import { ProductCard } from "@/components/product-card"

const products = [
  {
  id: "kanhaiya",
  title: "Kanhaiya Ji Idol",
  material: "Brass",
  description: "Beautifully crafted brass idol of Kanhaiya Ji, available in multiple sizes for home decor and worship.",
  image: {
    width: 800,
    height: 600,
    alt: "Kanhaiya Ji brass idol",
    url: "/kanhaiya.jpg",
  },
}
  {
    id: "diya-hold-1",
    title: "Diya holder with diya",
    material: "Brass",
    description: "Traditional brass diya holder designed for festive and spiritual decor.",
    image: {
      width: 800,
      height: 600,
      alt: "diya hold.",
      url: "/diya-hold-1.jpg",
    },
  },
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
  id: "brass-embroider-glass",
  title: "Brass Embroider Glass",
  material: "Brass",
  description: "Handcrafted brass glass with intricate embroidery-style etching.",
  image: {
    width: 800,
    height: 600,
    alt: "Brass embroider glass",
    url: "/brass-embroider-glass.jpg",
  },
},
{
  id: "borosil-bottles",
  title: "Borosil Bottles",
  material: "Stainless Steel",
  description: "Elegant borosil bottles, crafted to ensure the water inside retains a pure, clean taste with no chemical leaching.",
  image: {
    width: 800,
    height: 600,
    alt: "Borosil bottles",
    url: "/borosil-bottles.jpg",
  },
},
{
  id: "kadhai-set",
  title: "Kadhai Set",
  material: "Hard Anodized Aluminum",
  description: "Multi-size kadhai set for deep frying and Indian cooking.",
  image: {
    width: 800,
    height: 600,
    alt: "Kadhai set",
    url: "/kadhai-set.jpg",
  },
}
  {
    id: "appe-pan",
    title: "Appe Pan",
    material: "Cast Iron",
    description: "Simultaneously cooking of 4 to 12 appams.",
    image: {
      width: 800,
      height: 600,
      alt: "Appe Pan",
      url: "/appe-pan.jpeg",
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
    id: "brass-dinner-set",
    title: "Brass Dinner Set",
    material: "Brass",
    description: "Durable brass dinner set for everyday family meals.",
    image: {
      width: 800,
      height: 600,
      alt: "Brass dinner set",
      url: "/brass-dinner-set.jpeg",
    },
  },
  {
    id: "mixer-grinder-set",
    title: "Mixer Grinder Set",
    material: "Stainless Steel",
    description: "Simplifies cooking tasks like grinding, blending, and pureeing",
    image: {
      width: 800,
      height: 600,
      alt: "Mixer grinder set",
      url: "/mixer-grinder-set.jpeg",
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
  id: "pressure-cooker",
  title: "Pressure Cooker",
  material: "Aluminum",
  description: "Durable pressure cooker for fast and efficient cooking.",
  image: {
    width: 800,
    height: 600,
    alt: "Pressure cooker",
    url: "/pressure-cooker.jpeg",
  },
},
{
  id: "nonstick-tava",
  title: "Nonstick Tava",
  material: "Cast Iron",
  description: "Nonstick frying pan ideal for low-oil cooking.",
  image: {
    width: 800,
    height: 600,
    alt: "Nonstick tava",
    url: "/nonstick-tava.jpeg",
  },
},
{
  id: "pan-set",
  title: "Pan Set",
  material: "Stainless Steel",
  description: "Multi-piece pan set for versatile kitchen use.",
  image: {
    width: 800,
    height: 600,
    alt: "Pan set",
    url: "/pan-set.jpeg",
  },
}
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
