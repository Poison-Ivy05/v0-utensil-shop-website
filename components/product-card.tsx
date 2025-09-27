import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Product = {
  id: string
  title: string
  material: "Brass" | "Copper" | "Steel" | "Cast Iron" | "Aluminium"
  description: string
  image: { width: number; height: number; alt: string; url: string }
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-pretty">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="aspect-[4/3] relative overflow-hidden rounded-md border">
          <Image
            src={product.image.url || "/placeholder.svg"}
            alt={product.image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">{product.material}</span>
          <span className="text-xs text-muted-foreground">Contact for price</span>
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
    </Card>
  )
}
