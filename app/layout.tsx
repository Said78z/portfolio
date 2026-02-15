import type { Metadata } from "next"
import { Bebas_Neue } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: "Saïd KACI | SysOps & Cloud Engineer",
  description: "Apprenti SysOps @DILA | Hacker Éthique | Builder Web 3 | Dispo pour un stage juin 2026+",
  keywords: ["SysOps", "Cloud Engineer", "DevOps", "Cybersecurity", "React", "Next.js"],
  authors: [{ name: "Saïd KACI" }],
  creator: "Saïd KACI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://saidkaci.dev",
    title: "Saïd KACI | SysOps & Cloud Engineer",
    description: "Portfolio professionnel - Apprenti SysOps @DILA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={bebasNeue.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Bebas+Neue&family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
