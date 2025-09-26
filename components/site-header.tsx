"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact Us" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-xl text-balance">
          New Shri Hari Bartan Palace
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm px-2 py-1 rounded-md transition-colors",
                pathname === item.href
                  ? "bg-brand text-brand-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button asChild className="bg-brand text-brand-foreground hover:opacity-90">
            <Link href="/catalogue">View Catalogue</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
