'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Container } from '@/shared/container'
import { useMobileNav } from '@/hooks/use-mobile'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Company', href: '/' },
  { label: 'About Us', href: '/about-us' },
]

const trailingLinks = [
  { label: 'Customer Assistance', href: '/customer-assistance' },
  { label: 'Contact', href: '/contact' },
]

const products = [{ label: 'Cattle Gallstone', href: '/products/cattle-gallstone' }]

export default function Header() {
  const pathname = usePathname()
  const { mobileOpen, setMobileOpen, productsOpen, toggleProducts, closeMobile } = useMobileNav()

  return (
    <header className="w-full bg-[#E1364F]">
      <div className="flex items-stretch justify-between text-white">
        <div className="min-w-0 flex-1">
          <Container>
            <div className="flex items-center justify-between py-3 md:py-1">
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/BrandLogo.png"
                  alt="Brand Logo"
                  width={160}
                  height={48}
                  className="h-9 w-auto sm:h-10"
                  priority
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-7 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-base font-normal tracking-wide uppercase transition-opacity hover:opacity-80 leading-17.5',
                      pathname === link.href && 'underline underline-offset-4',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="h-auto rounded-none bg-transparent p-0 text-base leading-17.5 font-normal tracking-wide text-white uppercase focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent ">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-56 p-1">
                          {products.map((product) => (
                            <li key={product.href}>
                              <NavigationMenuLink render={<Link href={product.href} />}>
                                {product.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {trailingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-normal tracking-wide uppercase  leading-17.5 transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile menu trigger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  aria-label="Open menu"
                  className="flex items-center justify-center p-1 text-white lg:hidden"
                >
                  <MenuIcon className="size-6" />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="w-4/5 gap-0 p-0 sm:max-w-xs"
                >
                  <div className="flex items-center justify-between px-4 py-3 bg-[#E1364F]">
                    <Image
                      src="/BrandLogo.png"
                      alt="Brand Logo"
                      width={120}
                      height={36}
                      className="h-7 w-auto"
                    />
                    <SheetClose
                      aria-label="Close menu"
                      className="flex size-8 items-center justify-center border border-white/50 text-white"
                    >
                      <XIcon className="size-5" />
                    </SheetClose>
                  </div>

                  <div className="flex flex-col bg-[#FBECE8]" >
                    {navLinks.map((link) => {
                      const active = pathname === link.href
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            'border-b border-black/10 px-4 py-4 text-base font-normal tracking-wide uppercase',
                            active ? 'text-[#E1364F]' : 'text-neutral-800',
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    })}

                    <button
                      type="button"
                      onClick={toggleProducts}
                      className="flex items-center justify-between border-b border-black/10 px-4 text-base font-normal leading-17.5 tracking-wide text-neutral-800 uppercase"
                    >
                      Products
                      <ChevronDownIcon
                        className={cn('size-4 transition-transform', productsOpen && 'rotate-180')}
                      />
                    </button>
                    {productsOpen && (
                      <div className="flex flex-col bg-black/[0.03] px-4 pb-2">
                        {products.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={closeMobile}
                            className="py-2 pl-3 text-base text-neutral-700"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {trailingLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobile}
                        className={cn(
                          'px-4  text-base font-normal leading-17.5 tracking-wide text-neutral-800 uppercase',
                          i < trailingLinks.length - 1 && 'border-b border-black/10',
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </Container>
        </div>

        {/* Place Order  */}

        <Link
          href="/place-order"
          className="hidden shrink-0 items-center px-2 mr-10 text-base font-normal tracking-wide uppercase transition-colors lg:flex hover:brightness-110 rounded-full"
        >
          <Button className="bg-[#AC2A41] text-base font-normal leading-17.5 px-8 py-4 rounded-full cursor-pointer">
            Place Order
          </Button>
        </Link>
      </div>
    </header>
  )
}
