import { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="#" className="font-semibold tracking-widest text-white text-lg">
              NOIR<span className="text-amber-300">.ESSENCE</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="text-neutral-300 hover:text-white transition">Shop</a>
            <a href="#story" className="text-neutral-300 hover:text-white transition">Story</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
            <a href="#blog" className="text-neutral-300 hover:text-white transition">Blog</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-neutral-900/80 border border-neutral-800 rounded-full px-3 py-1.5">
              <Search size={16} className="text-neutral-400" />
              <input
                type="text"
                placeholder="Search fragrances"
                className="bg-transparent focus:outline-none text-sm text-neutral-200 placeholder-neutral-500 px-2 w-40"
              />
            </div>
            <button className="relative p-2 rounded-full hover:bg-neutral-800 text-neutral-200" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-400 text-neutral-900 text-[10px] font-bold rounded-full px-1.5">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-neutral-800">
            <div className="flex flex-col gap-3 pt-4">
              <a onClick={() => setOpen(false)} href="#shop" className="text-neutral-300 hover:text-white">Shop</a>
              <a onClick={() => setOpen(false)} href="#story" className="text-neutral-300 hover:text-white">Story</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
              <a onClick={() => setOpen(false)} href="#blog" className="text-neutral-300 hover:text-white">Blog</a>
            </div>
            <div className="mt-4 flex items-center bg-neutral-900/80 border border-neutral-800 rounded-full px-3 py-2">
              <Search size={16} className="text-neutral-400" />
              <input
                type="text"
                placeholder="Search fragrances"
                className="bg-transparent focus:outline-none text-sm text-neutral-200 placeholder-neutral-500 px-2 w-full"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
