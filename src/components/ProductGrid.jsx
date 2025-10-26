import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'iris-01',
    name: 'Iris Atelier',
    type: 'Floral',
    price: 180,
    popularity: 5,
    img: 'https://images.unsplash.com/photo-1619566636858-35e05d5b3c1f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Powdery iris, soft musk, and luminous bergamot in a sheer glass accord.',
  },
  {
    id: 'amber-02',
    name: 'Amber Nocturne',
    type: 'Woody',
    price: 220,
    popularity: 4,
    img: 'https://images.unsplash.com/photo-1615038555125-90f7c7e3b6fc?q=80&w=1200&auto=format&fit=crop',
    desc: 'Smoked amber, vanilla resin, and cedar glows with quiet intensity.',
  },
  {
    id: 'citrus-03',
    name: 'Citrus Veil',
    type: 'Citrus',
    price: 150,
    popularity: 3,
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
    desc: 'Effervescent bergamot and yuzu, softened by white musk.',
  },
  {
    id: 'rose-04',
    name: 'Rose Chromatic',
    type: 'Floral',
    price: 240,
    popularity: 5,
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    desc: 'Dewy rose petals with saffron shimmer and cashmere woods.',
  },
  {
    id: 'marine-05',
    name: 'Marine Graphite',
    type: 'Fresh',
    price: 170,
    popularity: 4,
    img: 'https://images.unsplash.com/photo-1547887539-c58d61b7519a?q=80&w=1200&auto=format&fit=crop',
    desc: 'Oceanic mineral facets with violet leaf and driftwood.',
  },
  {
    id: 'oud-06',
    name: 'Oud Silhouette',
    type: 'Woody',
    price: 320,
    popularity: 5,
    img: 'https://images.unsplash.com/photo-1526313199968-70e399ffe597?q=80&w=1200&auto=format&fit=crop',
    desc: 'Dark oud layered with smoke, cacao, and rose absolute.',
  },
];

const TYPES = ['All', 'Floral', 'Woody', 'Citrus', 'Fresh'];

export default function ProductGrid() {
  const [type, setType] = useState('All');
  const [sort, setSort] = useState('popularity');
  const [priceRange, setPriceRange] = useState(350);

  const filtered = useMemo(() => {
    let items = PRODUCTS.filter((p) => p.price <= priceRange);
    if (type !== 'All') items = items.filter((p) => p.type === type);
    if (sort === 'price-asc') items = [...items].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') items = [...items].sort((a, b) => b.price - a.price);
    if (sort === 'popularity') items = [...items].sort((a, b) => b.popularity - a.popularity);
    return items;
  }, [type, sort, priceRange]);

  return (
    <section id="shop" className="relative bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Fragrances</h2>
            <p className="mt-2 text-neutral-400 max-w-xl font-light">
              Curated scents crafted with precision. Filter by family, refine by price, and explore what the community loves.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-neutral-400" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none"
                aria-label="Filter by type"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none"
                aria-label="Sort products"
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <div className="col-span-2 flex items-center gap-3">
              <span className="text-xs text-neutral-400">Max ${priceRange}</span>
              <input
                type="range"
                min={120}
                max={350}
                step={10}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-48 accent-amber-300"
                aria-label="Max price"
              />
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: Math.min(idx * 0.05, 0.3), duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} perfume bottle product image`}
                  loading="lazy"
                  className="h-full w-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/70 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-neutral-950/70 border border-neutral-800 px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-300">
                  {p.type}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-white">{p.name}</h3>
                  <span className="text-amber-300 font-semibold">${p.price}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-400 font-light">{p.desc}</p>
                <div className="mt-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < p.popularity ? 'text-amber-300 fill-amber-300' : 'text-neutral-600'} />
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <button className="rounded-full bg-amber-300 text-neutral-900 px-4 py-2 text-xs font-semibold hover:-translate-y-0.5 transition">Add to Cart</button>
                  <a href="#" className="text-sm text-neutral-300 hover:text-white">View details →</a>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-amber-300/20 transition" />
              <div className="absolute -inset-12 opacity-0 group-hover:opacity-15 blur-3xl bg-amber-400/10 rounded-full transition" />
            </motion.article>
          ))}
        </motion.div>

        <div id="story" className="mt-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Craft</h3>
            <p className="mt-4 text-neutral-400 font-light leading-relaxed">
              Each essence is composed in small batches by master perfumers, using sustainably sourced ingredients. We balance heritage techniques with a modern minimalist aesthetic, letting each note breathe.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop"
              alt="Craftsmanship and perfumery lab"
              loading="lazy"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
