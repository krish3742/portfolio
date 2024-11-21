import Style from "./Education.module.css";

function Education(props) {
  return (
    <div ref={props.education} className={Style.educationContainer}>
      <div className={Style.container}>
        <div className={Style.firstContainers}>
          <h1 className={Style.heading}>Education</h1>
        </div>
        <div className={Style.secondContainers}>
          <div className={Style.content}>
            <h4 className="font-bold">
              B.Tech, <span className={Style.para}>Galgotias University</span>
            </h4>
            <p className={Style.years}>2020 - 2024</p>
            <p>7.83 CGPA</p>
          </div>
          <div className={Style.content}>
            <h4 className="font-bold">
              Intermediate, <span className={Style.para}>NIOS Board</span>
            </h4>
            <p className={Style.years}>2019 - 2020</p>
            <p>PCM - 72.86%</p>
          </div>
          <div className={Style.content}>
            <h4 className="font-bold">
              High School, <span className={Style.para}>ICSE Board</span>
            </h4>
            <p className={Style.years}>2016 - 2017</p>
            <p>PCMB - 75.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
