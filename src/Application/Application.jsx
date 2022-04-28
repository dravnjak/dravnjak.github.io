import './Application.css';
import Header from "../components/Header";

function Application() {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: 'url("hero.png")' }}>
        <div className="hero-area">
          <div className="text-right text-area">
            <Header />
            <h2>Our Mission</h2>
            <p className="opacity-75">
              Dedication to your success.
            </p>
            <h2>Our Process</h2>
            <p className="opacity-75">
              Before creation, there's thinking.<br/>
              Our process is sharp and let us craft the best quality.
            </p>
            <div className="bottom-area">
              <h3>Contact us</h3>
              <p className="opacity-75">
                <a href="mailto:damjan@24setup.com">office@24setup.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
