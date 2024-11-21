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
            <h4 className="font-bold">
              Web Development Intern,{" "}
              <span className={Style.para}>Triweb Genesis Pvt. Ltd.</span>
            </h4>
            <p className={Style.years}>May 2024 - November 2024</p>
            <ul className={Style.listpara}>
              <li className={Style.list}>
                Developed and maintained responsive web applications using the
                MERN stack, ensuring seamless functionality and smooth user
                experiences.
              </li>
              <li className={Style.list}>
                Contributed to an open-source GitHub repository by developing
                new features, resolving issues, and enhancing overall project
                functionality.
              </li>
              <li className={Style.list}>
                Collaborated with a team using Git and GitHub for version
                control and conducted code reviews to maintain a clean,
                organized codebase.
              </li>
            </ul>
          </div>
          <div className={Style.content}>
            <h4 className="font-bold">
              Club Member, <span className={Style.para}>TechnoJam</span>
            </h4>
            <p className={Style.years}>2021 - 2023</p>
            <ul className={Style.listpara}>
              <li>
                Paricipated and conducted several hackathons at college level.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
