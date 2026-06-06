import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="home" className="hero-container">

        <div className="hero-image">
          <img
            src={profile}
            alt="Nazmus Sakib Sumon"
          />
        </div>

        <div className="hero-text">

          <h1>Nazmus Sakib Sumon</h1>

          <h3>
             Data Analyst | Educator | Researcher
          </h3>

            <p>
            Helping organizations transform data into actionable insights through analytics, business intelligence, and information systems.
            </p>

            <p>
            Passionate about teaching, research, and bridging the gap between academic theory and real-world practice.
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
              href="./Nazmus_Sakib_Sumon_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>

          </div>

        </div>

      </section>

      {/* TOOLS SECTION */}
{/* INTRO SECTION */}

<section id="about" className="intro-section">
  

  <h2>About Me</h2>

<p>
I am a Data Analyst at the University of Georgia with over six years of experience in data analytics, business intelligence, information systems, and decision-support systems within higher education environments.

My academic background includes an MBA in Information Systems from the University of Toledo, ongoing graduate studies in Analytics at Georgia Institute of Technology, and a BBA in Management Information Systems from the University of Dhaka.

My professional interests lie at the intersection of Information Systems, Business Analytics, Artificial Intelligence, and Higher Education. Through this website, I share research interests, teaching areas, professional projects, articles, and educational content based on real-world experience.
</p>

</section>
<section id="research" className="content-section">

  <h2>Research Interests</h2>

  <p>
    My research interests focus on the intersection of
    information systems, business intelligence, data analytics,
    artificial intelligence, and organizational decision making.
  </p>

  <div className="article-grid">

    <div className="article-card">
      <h3>Business Intelligence</h3>
      <p>
        Improving organizational performance through data-driven insights.
      </p>
    </div>

    <div className="article-card">
      <h3>Data Analytics</h3>
      <p>
        Applying analytical techniques to solve practical business problems.
      </p>
    </div>

    <div className="article-card">
      <h3>Information Systems</h3>
      <p>
        Understanding how technology supports organizational goals.
      </p>
    </div>

    <div className="article-card">
      <h3>Artificial Intelligence</h3>
      <p>
        Exploring practical AI adoption in higher education and business.
      </p>
    </div>

  </div>

</section>
<section id="teaching" className="content-section">

  <h2>Teaching</h2>

  <p className="section-intro">
    My teaching philosophy emphasizes connecting academic concepts
    with practical industry applications so that students develop
    both theoretical understanding and real-world problem-solving skills.
  </p>

  <div className="article-grid">

    <div className="article-card">
      <h3>Management Information Systems</h3>
      <p>Technology, organizations, and business strategy.</p>
    </div>

    <div className="article-card">
      <h3>Business Analytics</h3>
      <p>Data-driven decision making and analytical thinking.</p>
    </div>

    <div className="article-card">
      <h3>Business Intelligence</h3>
      <p>Transforming organizational data into actionable insights.</p>
    </div>

    <div className="article-card">
      <h3>Database Management</h3>
      <p>Database design, SQL, and information management.</p>
    </div>

    <div className="article-card">
      <h3>Data Visualization</h3>
      <p>Communicating information through dashboards and reports.</p>
    </div>

    <div className="article-card">
      <h3>Decision Support Systems</h3>
      <p>Using technology and analytics to support decisions.</p>
    </div>

  </div>

  <div className="teaching-experience">
    <h3>Teaching Experience</h3>

    <p>
      Graduate Teaching Assistant<br />
      University of Toledo
    </p>
  </div>

</section>
<section id="videos" className="content-section">

  <h2>Featured Videos</h2>

  <div className="video-grid">

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>Pivot Tables in 3 Minutes</h3>
      <p>Learn how to summarize large datasets quickly using Excel Pivot Tables.</p>
    </div>

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>Connecting APIs to Qlik</h3>
      <p>Step-by-step guide to loading REST API data into Qlik Sense.</p>
    </div>

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>SQL Window Functions Explained</h3>
      <p>Understand ROW_NUMBER, RANK, and partitioning with practical examples.</p>
    </div>

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>Building Executive Dashboards</h3>
      <p>How to design dashboards that help leaders make decisions.</p>
    </div>

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>Python Automation for Analysts</h3>
      <p>Automate repetitive reporting tasks using Python.</p>
    </div>

    <div className="video-card">
      <img src="https://placehold.co/400x220" alt="Video Thumbnail" />
      <h3>Data Cleaning Techniques</h3>
      <p>Methods for handling missing values and messy datasets.</p>
    </div>

  </div>

</section>

<section id="articles" className="content-section">

  <h2>Featured Articles</h2>

  <div className="article-grid">

    <div className="article-card">
      <h3>Why Most Dashboards Fail</h3>
      <p>
        Organizations invest heavily in dashboards,
        yet many fail to drive decision-making.
      </p>
      <a href="#">Read Article →</a>
    </div>

    <div className="article-card">
      <h3>Reporting vs Analytics</h3>
      <p>
        Understanding the difference between reporting
        historical information and generating insights.
      </p>
      <a href="#">Read Article →</a>
    </div>

    <div className="article-card">
      <h3>Data Quality Matters</h3>
      <p>
        Even the best dashboard becomes useless
        when the underlying data is inaccurate.
      </p>
      <a href="#">Read Article →</a>
    </div>

    <div className="article-card">
      <h3>Automating Business Processes</h3>
      <p>
        Small automations can save hundreds of hours
        every year across departments.
      </p>
      <a href="#">Read Article →</a>
    </div>

    <div className="article-card">
      <h3>How Executives Consume Data</h3>
      <p>
        Leaders need clarity, not complexity.
        Simplicity often beats sophistication.
      </p>
      <a href="#">Read Article →</a>
    </div>

    <div className="article-card">
      <h3>Building Trust in Analytics</h3>
      <p>
        Adoption improves dramatically when users
        understand where data originates.
      </p>
      <a href="#">Read Article →</a>
    </div>

  </div>

</section>

<section id="projects" className="content-section">

  <h2>Featured Projects</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>Dining Analytics Dashboard</h3>

      <p>
        Automated reporting and operational analytics for dining services.
      </p>

      <div className="project-tags">
        <span>Qlik</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="project-card">
      <h3>Device Compliance Dashboard</h3>

      <p>
        Integrated Active Directory, Asset Inventory, and LANDesk data.
      </p>

      <div className="project-tags">
        <span>Qlik</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="project-card">
      <h3>MorphoWave Enrollment Analytics</h3>

      <p>
        Enrollment tracking and meal plan analytics for student dining.
      </p>

      <div className="project-tags">
        <span>Qlik</span>
        <span>API</span>
      </div>
    </div>

    <div className="project-card">
      <h3>NOAA Weather Analytics</h3>

      <p>
        Historical weather analysis and operational forecasting support.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>API</span>
      </div>
    </div>

  </div>

</section>





<section id="cv" className="content-section">

  <h2>Curriculum Vitae</h2>

  <a
    className="cv-btn"
    href="./Nazmus_Sakib_Sumon_CV.pdf"
    target="_blank"
    rel="noreferrer"
  >
    Download CV
  </a>

</section>

<section id="contact" className="contact-section">

  <h2>Let's Connect</h2>

  <p>
    Whether you have a question, a collaboration opportunity,
    or simply want to discuss data analytics, business intelligence,
    and technology, feel free to reach out.
  </p>

  <div className="contact-links">

    <a
      href="mailto:sakibsumon.du@gmail.com"
      className="contact-card"
    >
      📧 Email Me
      <span>sakibsumon.du@gmail.com</span>
    </a>

    <a
      href="https://www.linkedin.com/in/nazmus-sakib-sumon/"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      💼 LinkedIn
      <span>Connect Professionally</span>
    </a>

  </div>

</section>

</div>
);
}

export default Home;