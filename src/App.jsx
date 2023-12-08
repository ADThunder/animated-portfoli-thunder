import "./app.scss";
import {
  Contact,
  Cursor,
  Hero,
  Navbar,
  Parallax,
  Portfolio,
  Services,
} from "./components";
// import Test from "./Test";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
