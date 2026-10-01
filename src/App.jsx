import { useState } from 'react';
import { Menu, X, ArrowUpRight, MapPin, Phone, Star, Clock } from 'lucide-react';

const menuItems = [
  { name: 'Camel Milk Cappuccino', category: 'SIGNATURE COFFEE', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=900', description: 'A distinctive coffee experience inspired by local tradition.' },
  { name: 'Traditional Camel Milk', category: 'LOCAL SPECIALTY', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=900', description: 'Discover the unique taste of camel milk.' },
  { name: 'Coffee Chocolate Frappé', category: 'COLD DRINKS', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900', description: 'A refreshing blend of coffee and chocolate.' },
  { name: 'Omelette & Traditional Meat', category: 'LOCAL FOOD', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900', description: 'A taste of local cuisine, served fresh.' }
];
const reviews = [
  { name: 'Salvatore Leccese', text: 'Food and drinks were really good. The omelette with cheese, dried camel meat, coffee frappé and orange juice were excellent. Personnel was nice and polite.' },
  { name: 'Khalid Fadil', text: 'The service, place, vibe, food, sweets and camel milk are wonderful. They focus on every detail.' },
  { name: 'Irsan Hassan', text: 'A nice coffee shop with traditional meals. A memorable place to visit in Djibouti.' }
];
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=The+Camel+Coffee+Shop+Djibouti';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">C</span>
          <span><strong>THE CAMEL</strong><small>COFFEE SHOP · DJIBOUTI</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#visit" onClick={closeMenu}>Visit Us</a>
          <a className="nav-cta" href="tel:+25377081122">Contact Us <ArrowUpRight size={16} /></a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow"><span /> A TASTE OF DJIBOUTI</div>
          <h1>More than<br />coffee. <em>A culture.</em></h1>
          <p>Discover the warmth of traditional hospitality, specialty coffee and the unique taste of camel milk.</p>
          <div className="hero-actions">
            <a href="#menu" className="button button-light">Explore Our Menu <ArrowUpRight size={17} /></a>
            <a href="#story" className="text-link">Discover our story <span>↓</span></a>
          </div>
        </div>
        <div className="hero-bottom"><span>J45X+959 · DJIBOUTI</span><span>GOOD COFFEE. GREAT COMPANY.</span></div>
        <div className="hero-rating"><Star size={17} fill="currentColor" /><strong>4.4</strong><span>★★★★★</span><small>49 Google reviews</small></div>
      </section>

      <section className="intro section" id="story">
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200" alt="Warm coffee shop interior" />
          <div className="image-caption"><span>THE ART OF HOSPITALITY</span><strong>Made with warmth.</strong></div>
        </div>
        <div className="intro-copy">
          <span className="eyebrow dark">WELCOME TO OUR WORLD</span>
          <h2>A little tradition.<br /><em>A lot of heart.</em></h2>
          <p>At The Camel Coffee Shop, coffee is just the beginning. Experience a welcoming atmosphere where familiar café favourites meet the distinctive flavours of Djibouti.</p>
          <p>From freshly prepared drinks to traditional specialties, every visit is an invitation to slow down and enjoy.</p>
          <a href="#visit" className="underlined-link">Come say hello <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="specialty">
        <div className="specialty-image" />
        <div className="specialty-content">
          <span className="eyebrow">A LOCAL SIGNATURE</span>
          <h2>Discover the<br /><em>camel milk</em><br />experience.</h2>
          <p>A distinctive local speciality and an unforgettable part of the café experience.</p>
          <a href="#menu" className="button button-light">Explore Our Specialties <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">MADE TO BE ENJOYED</span>
            <h2>Our <em>favourites.</em></h2>
          </div>
          <p>A little something for every craving. Discover coffee, refreshing drinks and local flavours.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, i) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="menu-number">0{i + 1}</span>
              </div>
              <div className="menu-info">
                <span className="menu-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-price">Discover in store</span>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-note">Menu items and prices may vary. Please contact the café for current availability.</p>
      </section>

      <section className="quote-section">
        <span className="quote-mark">“</span>
        <h2>Good coffee brings people together.<br /><em>Great memories keep them coming back.</em></h2>
        <span className="quote-line" />
        <p>THE CAMEL COFFEE SHOP · DJIBOUTI</p>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">KIND WORDS</span>
            <h2>Our guests <em>say it best.</em></h2>
          </div>
          <div className="review-score"><strong>4.4</strong><span>★★★★★</span><small>Based on 49 Google reviews</small></div>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-stars">★★★★★</div>
              <p>“{r.text}”</p>
              <div className="review-author">
                <span className="avatar">{r.name.charAt(0)}</span>
                <strong>{r.name}</strong>
                <span>Google Review</span>
              </div>
            </article>
          ))}
        </div>
        <a className="underlined-link review-link" href={mapsUrl} target="_blank" rel="noreferrer">Read more Google reviews <ArrowUpRight size={16} /></a>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-image" />
        <div className="visit-content">
          <span className="eyebrow">YOUR TABLE IS WAITING</span>
          <h2>Come for the coffee.<br /><em>Stay for the feeling.</em></h2>
          <p>Whether you're starting your morning or taking a little break, we'd love to welcome you.</p>
          <div className="visit-details">
            <div><MapPin /><span><strong>Find Us</strong>J45X+959, En face de l’Hotel Sing’s au Héron, Djibouti</span></div>
            <div><Clock /><span><strong>Opening Hours</strong>Closes at 11:30 PM</span></div>
            <div><Phone /><span><strong>Call Us</strong>+253 77 08 11 22</span></div>
          </div>
          <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">C</span>
          <span><strong>THE CAMEL</strong><small>COFFEE SHOP · DJIBOUTI</small></span>
        </a>
        <p>Tradition in every cup. Hospitality in every moment.</p>
        <div className="footer-bottom">
          <span>© 2026 The Camel Coffee Shop</span>
          <a href="tel:+25377081122">+253 77 08 11 22</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Find us on Google Maps</a>
        </div>
      </footer>
    </main>
  );
}
