"use client"

import { useState } from "react"

export function useMobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
    setProductsOpen(false)
  }
  const toggleProducts = () => setProductsOpen((open) => !open)

  return {
    mobileOpen,
    setMobileOpen,
    productsOpen,
    toggleProducts,
    closeMobile,
  }
}