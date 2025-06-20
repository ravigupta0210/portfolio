import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
  <div className="work-container section-container">
    <h2>
      My <span>Work</span>
    </h2>
    <div className="work-flex">
      {[
  {
    id: "01",
    title: "eMart",
    category: "E-Commerce Platform",
    tools: "React, Node.js, Express, MongoDB, Stripe, Tailwind",
    image: "/images/emart.jpeg",
  },
  {
    id: "02",
    title: "SocialPedia",
    category: "Social Media App",
    tools: "React, Node.js, Express, MongoDB, MUI",
    image: "/images/socio.jpeg",
  },
  {
    id: "03",
    title: "eDocOffice",
    category: "Healthcare System",
    tools: "React, Node.js, Express, MongoDB, MUI",
    image: "/images/e-doc.webp",
  },
  {
    id: "04",
    title: "Exploring Handicraft",
    category: "Static Web App",
    tools: "HTML, CSS, Bootstrap, JavaScript",
    image: "/images/handicraft.jpg",
  },
  {
    id: "06",
    title: "Portfolio Website",
    category: "Personal Branding",
    tools: "React, Three.js, Framer Motion",
    image: "/images/portfolio.png",
  },
].map((project, index) => (
        <div className="work-box" key={index}>
          <div className="work-info">
            <div className="work-title">
              <h3>{project.id}</h3>
              <div>
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>{project.tools}</p>
          </div>
          <WorkImage image={project.image} alt={project.title} />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Work;
