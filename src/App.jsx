import {
  About,
  Features,
  Footer,
  Header,
  Hero,
  Service,
  Testimonials,
} from "./components";
import Pricing from "./components/Pricing";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Service />
      <Features />
      <Testimonials />
      <Pricing />
      <About />
      <Footer />
    </main>
  );
}

export default App;
