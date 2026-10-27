import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Your Daily Dose of Happiness</h1>
        <p>Fresh coffee, delicious treats, and cozy moments.</p>
        <button className="button">Explore Our Menu</button>
      </section>

      <section className="menu" id="menu">
        <h2>Our Favorites</h2>

        <div className="card-list">
          <div className="card">
            <div className="card-emoji">☕</div>
            <h3>Classic Latte</h3>
            <p>Smooth and creamy coffee made with fresh milk.</p>
            <div className="price">$4.50</div>
            <button className="button">Order Now</button>
          </div>

          <div className="card">
            <div className="card-emoji">🥐</div>
            <h3>Fresh Croissant</h3>
            <p>A golden, buttery pastry baked fresh every morning.</p>
            <div className="price">$3.00</div>
            <button className="button">Order Now</button>
          </div>

          <div className="card">
            <div className="card-emoji">🍰</div>
            <h3>Chocolate Cake</h3>
            <p>A rich chocolate dessert for your afternoon break.</p>
            <div className="price">$5.00</div>
            <button className="button">Order Now</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;