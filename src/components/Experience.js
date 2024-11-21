import Style from "./Experience.module.css";

function Experience(props) {
  return (
    <>
      <div ref={props.experience} className={Style.container}>
        <div className={Style.firstContainers}>
          <h1 className={Style.heading}>Experience</h1>
        </div>
        <div className={Style.secondContainers}>
          <div className={Style.content}>
            <p className={Style.years}>2024 - Present</p>
            <h4 className="font-bold">SinQlarity</h4>
            <p className="min-w-full">MERN Stack Developer</p>
            <p className={Style.para}>
              Gained proficiency in MERN Stack through hands-on project
              learning.
            </p>
          </div>
          <div className={Style.content}>
            <p className={Style.years}>2021 - 2023</p>
            <h4 className="font-bold">TechnoJam</h4>
            <p>Club Member</p>
            <p className={Style.para}>
              Paricipated and conducted several hackathons at college level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
