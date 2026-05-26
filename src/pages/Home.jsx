import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-container">

        <div className="hero-image">
          <img
            src={profile}
            alt="Nazmus Sakib Sumon"
          />
        </div>

        <div className="hero-text">

          <h1>Nazmus Sakib Sumon</h1>

          <h3>
            Data Analyst | Business Intelligence Professional
          </h3>

          <p>
            To contribute to academic and business excellence through
            data analytics, business intelligence, and information
            systems by transforming complex data into actionable
            insights and real-world solutions.
          </p>

          <div className="button-group">

            <a
              className="linkedin-btn"
              href="https://www.linkedin.com/in/nazmus-sakib-sumon/"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn
            </a>

            <a
              className="cv-btn"
              href="/Nazmus_Sakib_Sumon_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>

          </div>

        </div>

      </section>

      {/* TOOLS SECTION */}
      <section className="tools-section">

        <h2>
          Want to learn how analytics tools solve real-world business problems?
        </h2>

        <div className="cards">

          <Link to="/excel" className="card">
            Excel
          </Link>

          <Link to="/sql" className="card">
            SQL
          </Link>

          <Link to="/powerbi" className="card">
            Power BI
          </Link>

          <Link to="/python" className="card">
            Python
          </Link>

          <Link to="/tableau" className="card">
            Tableau
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;