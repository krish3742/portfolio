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
            <p>7.83 CGPA</p>
            <p className={Style.years}>2020 - 2024</p>
            <p className="font-bold">
              Project: Credit Card Fraud Detection System
            </p>
            <ul className={Style.listpara}>
              <li>
                Developed a machine learning model to detect fraudulent credit
                card transactions, prioritizing high accuracy and low false
                positive rates.
              </li>
              <li>
                Evaluated and compared multiple machines learning algorithms,
                including Decision Trees, Support Vector Machine, and Neural
                Networks.
              </li>
              <li>
                Trained and tested models using a real-world dataset of credit
                card transactions, consisting of both legitimate and fraudulent
                cases.
              </li>
              <li>
                Achieved high accuracy, with SVM and Neural Networks
                demonstrating the best performance.
              </li>
            </ul>
          </div>
          <div className={Style.content}>
            <h4 className="font-bold">
              Intermediate, <span className={Style.para}>NIOS Board</span>
            </h4>
            <p>PCM - 72.86%</p>
            <p className={Style.years}>2019 - 2020</p>
          </div>
          <div className={Style.content}>
            <h4 className="font-bold">
              High School, <span className={Style.para}>ICSE Board</span>
            </h4>
            <p>PCMB - 75.33%</p>
            <p className={Style.years}>2016 - 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
