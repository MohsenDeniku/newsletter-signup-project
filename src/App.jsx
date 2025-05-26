import "./App.css";
export default function App() {
  return (
    <>
      <div className="app">
        <picture>
          <source
            srcSet="/images/illustration-sign-up-desktop.svg"
            media="(min-width: 768px)"
          />
          <img
            className="main-img"
            src="/images/illustration-sign-up-mobile.svg"
            alt="illustration"
          />
        </picture>
        <main className="main">
          <section className="text-section">
            <h1>Stay updated!</h1>
            <p>
              Join 60,000+ product managers receiving monthly updates on:
              <br />
            </p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
          </section>
          <form className="form">
            <label htmlFor="email">Email Address:</label>
            <input type="email" placeholder="email@company.com" />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </main>
      </div>
      <footer>
        <p className="footer-text">
          Made by <a href="www.linkedin.com/in/mohsen-deniku">Mohsen Deniku</a>.
        </p>
      </footer>
    </>
  );
}
