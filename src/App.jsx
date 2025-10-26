import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        {/* Blog/Resources and Contact pages would be separate routes in a full build. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
