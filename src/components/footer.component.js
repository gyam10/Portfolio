import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "../assets/css/footer.css";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="socialMedia">
          <a
            href="https://linkedin.com/in/gyamjo-dong-421760246/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://youtube.com/@edoask3343/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a href="https://github.com/gyam10" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </div>
        <p>&copy; {year}</p>
      </div>
    </>
  );
};
export default Footer;
