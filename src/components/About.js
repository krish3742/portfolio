import { MdOutlineLocalFireDepartment } from "react-icons/md";
import Style from "./About.module.css";

function About(props) {
  return (
    <>
      <div ref={props.about} className={Style.container}>
        <div className={Style.firstContainers}>
          <h1 className={Style.heading}>About Me</h1>
        </div>
        <div className={Style.secondContainers}>
          <div className={Style.avatar}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
              alt="Skytsunami"
            />
          </div>
          <div className={Style.content}>
            <div className={Style.paraDiv}>
              <p className={Style.para}>
                MERN Developer with over 6+ months of experience in designing
                and developing responsive, user-friendly websites. Skilled in
                delivering optimized and intuitive solutions to enhance user
                experience.
              </p>
            </div>
            <div className={Style.stacksDiv}>
              <div className={Style.noUseDiv}>
                <div className={Style.stacksInnerDiv}>
                  <p className={Style.stacks}>DSA</p>
                  <p>70%</p>
                </div>
                <div className={Style.full}>
                  <div className={Style.dsaStack}></div>
                </div>
              </div>
              <div>
                <div className={Style.stacksInnerDiv}>
                  <p className={Style.stacks}>Designing</p>
                  <p>90%</p>
                </div>
                <div className={Style.full}>
                  <div className={Style.designStack}></div>
                </div>
              </div>
              <div>
                <div className={Style.stacksInnerDiv}>
                  <p className={Style.stacks}>Communication</p>
                  <p>95%</p>
                </div>
                <div className={Style.full}>
                  <div className={Style.commStack}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.thirdContainers}>
          <div>
            <MdOutlineLocalFireDepartment className={Style.icons} />
          </div>
          <div>
            <h1 className={Style.project}>5+</h1>
            <p className={Style.projectDetails}>Projects Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
