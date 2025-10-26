export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm text-neutral-300">
        <div className="md:col-span-2">
          <h4 className="font-semibold text-white">NOIR<span className="text-amber-300">.ESSENCE</span></h4>
          <p className="mt-3 text-neutral-400 max-w-md font-light">
            A study in restraint. Contemporary fragrances designed for quiet impact. Crafted in small batches.
          </p>
          <form className="mt-5 flex gap-2">
            <input
              type="email"
              placeholder="Join the newsletter"
              className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none"
              aria-label="Email address"
            />
            <button className="rounded-lg bg-amber-300 text-neutral-900 px-4 py-2 font-semibold">Subscribe</button>
          </form>
        </div>
        <div>
          <h5 className="text-white font-medium">Explore</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#shop" className="hover:text-white">Shop</a></li>
            <li><a href="#story" className="hover:text-white">Our Story</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Contact</h5>
          <ul className="mt-3 space-y-2 text-neutral-400">
            <li>hello@noir-essence.com</li>
            <li>+1 (212) 555-0199</li>
            <li>Paris • New York • Tokyo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Noir Essence. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
