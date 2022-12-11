import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "../assets/css/home.css";
import { Container, Row, Col } from "react-bootstrap";
import react from "../assets/image/react.png";
import nodejs from "../assets/image/nodejs.png";
import mongodb from "../assets/image/mongodb.svg";
import js from "../assets/image/JS.png";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="home">
        <div className="about">
          <h2>Hi, My Name is Gyamjo</h2>
          <div className="prompt">
            <p>A Web developer with a passion for learning and creating.</p>
            <a
              href="https://linkedin.com/in/gyamjo-dong-421760246/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/gyam10"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>

        <section className="skill" id="skills">
          <Container>
            <Row>
              <Col>
                <div className="skill-box">
                  <h2>Skills</h2>

                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <img src={react} alt="" />
                      <h5>React</h5>
                    </div>
                    <div className="item">
                      <img src={js} alt="" />
                      <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                      <img src={mongodb} alt="" />
                      <h5>MongoDB</h5>
                    </div>
                    <div className="item">
                      <img src={nodejs} alt="" />
                      <h5>NodeJs</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};
export default Home;
