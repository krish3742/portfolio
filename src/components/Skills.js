import Style from "./Skills.module.css";

function Skills(props) {
  return (
    <>
      <div ref={props.skills} className={Style.skillsContainer}>
        <div className={Style.container}>
          <div className={Style.firstContainers}>
            <h1 className={Style.heading}>Skills</h1>
          </div>
          <div className={Style.secondContainers}>
            <div className={Style.skillsContainers}>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/HTML.png")}
                  alt="HTML"
                />
                <p className={Style.para}>HTML</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/CSS.png")}
                  alt="CSS"
                />
                <p className={Style.para}>CSS</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/React.png")}
                  alt="React"
                />
                <p className={Style.para}>React</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/JS.png")}
                  alt="JavaScript"
                />
                <p className={Style.para}>JavaScript</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/TS.png")}
                  alt="TypeScript"
                />
                <p className={Style.para}>TypeScript</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Bootstrap.png")}
                  alt="Bootstrap"
                />
                <p className={Style.para}>Bootstrap</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Tailwind.png")}
                  alt="Tailwind"
                />
                <p className={Style.para}>Tailwind</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Node.png")}
                  alt="Node"
                />
                <p className={Style.para}>Node JS</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Express.png")}
                  alt="Express"
                />
                <p className={Style.para}>Express JS</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/REST_API.png")}
                  alt="REST_API"
                />
                <p className={Style.para}>Rest API</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/MySQL.png")}
                  alt="MySQL"
                />
                <p className={Style.para}>MySQL</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/MongoDB.png")}
                  alt="MongoDB"
                />
                <p className={Style.para}>MongoDB</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Git.png")}
                  alt="Git"
                />
                <p className={Style.para}>Git</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Jira.png")}
                  alt="Jira"
                />
                <p className={Style.para}>Jira</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Postman.png")}
                  alt="Postman"
                />
                <p className={Style.para}>Postman</p>
              </div>
              <div className={Style.skillsDiv}>
                <img
                  className="h-8 w-auto bg-cover"
                  src={require("../documents/Photoshop.png")}
                  alt="Photoshop"
                />
                <p className={Style.para}>Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
