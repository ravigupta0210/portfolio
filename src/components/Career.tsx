import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* MountBlue / Gooru */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>MountBlue Technologies / Gooru Learning India Pvt. Ltd.</h5>
              </div>
              <h3>June 2024 – Present</h3>
            </div>
            <p>
              Working on multiple frontend projects with Gooru Learning India, delivering clean, maintainable code. 
              Collaborating closely with cross-functional teams to implement UI features that align with user needs and product goals.
            </p>
          </div>

          {/* TechDost */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>TechDost</h5>
              </div>
              <h3>May 2023 – July 2023</h3>
            </div>
            <p>
              Enhanced web performance with a 20% speed improvement. Managed and maintained content across 100+ pages, 
              contributing over 500 hours in development, debugging, and feature testing.
            </p>
          </div>

          {/* NullClass */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>NullClass</h5>
              </div>
              <h3>Jan 2023 – Mar 2023</h3>
            </div>
            <p>
              Collaborated in a 5-member team to build a web app. Actively debugged, resolved functionality issues, 
              and contributed to feature ideation sessions to improve engagement and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;