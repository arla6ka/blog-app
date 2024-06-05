/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PcON8CumnIf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"


export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-6 bg-gray-900 shadow-sm">
      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-gray-400 hover:text-gray-50 transition-colors font-bold" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-gray-50 transition-colors font-bold" prefetch={false}>
          About
        </Link>
        <Link href="/blog" className="text-gray-400 hover:text-gray-50 transition-colors font-bold" prefetch={false}>
          Blog
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
  
      </div>
    </header>
  )
}