export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">New Shri Hari Bartan Palace</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Premium brass, copper, and steel utensils. Handcrafted & durable designs since 1970. Lucknow · Yahiyaganj
            Bartan Bazar.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="text-sm mt-2 space-y-1">
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
                aria-label="Visit Instagram profile newshriharibartan"
              >
                @newshriharibartan
              </a>
            </li>
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
        <div className="text-sm text-muted-foreground md:text-right">
          <p>&copy; {new Date().getFullYear()} New Shri Hari Bartan Palace</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
