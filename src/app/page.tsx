import About from "./components/about/about";
import Authority from "./components/authority/authority";
import Cta from "./components/cta/cta";
import Hero from "./components/hero/hero";
import Space from "./components/space/space";
import Trans from "./components/trans/trans";

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <About />
      <Trans />
      <Space />

      <Cta />
    </>
  )
}
