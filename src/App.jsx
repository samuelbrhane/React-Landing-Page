import {
  About,
  Features,
  Header,
  Hero,
  Service,
  Testimonials,
} from "./components";
import Pricing from "./components/Pricing";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Service />
      <Features />
      <Testimonials />
      <Pricing />
      <About />
    </main>
  );
}

export default App;
