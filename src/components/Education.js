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
            <p className={Style.years}>2020 - 2024</p>
            <h4 className="font-bold">B.Tech</h4>
            <p className="min-w-full">Galgotias University</p>
            <p>7.83 CGPA</p>
          </div>
          <div className={Style.content}>
            <p className={Style.years}>2019 - 2020</p>
            <h4 className="font-bold">Intermediate</h4>
            <p>NIOS Board</p>
            <p>PCM - 72.86%</p>
          </div>
          <div className={Style.content}>
            <p className={Style.years}>2016 - 2017</p>
            <h4 className="font-bold min-w-full">High School</h4>
            <p>ICSE Board</p>
            <p>PCMB - 75.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
