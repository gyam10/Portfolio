import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#ef8b11">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2072"
            iconStyle={{ background: "#ef8b11", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Pawan Prakriti English Higher Secondary School, Tikathali,
              Lalitpur
            </h3>
            <p>School Level </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2072"
            iconStyle={{ background: "#ef8b11", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Apetch Computer Education, Tikathali, Lalitpur
            </h3>
            <p>Web Designing </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2072/73"
            iconStyle={{ background: "#ef8b11", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Omega Int'l College, Kumaripati, Lalitpur
            </h3>
            <p>High School Level </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2074-Present"
            iconStyle={{ background: "#ef8b11", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              National College of Engineering, Tanchikhel, Lalitpur
            </h3>
            <p>Bachelors </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2079"
            iconStyle={{ background: "#ef8b11", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Broadways Infosys, Tinkune, Kathmandu
            </h3>
            <p>MERN Stack Development </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
export default Experience;
