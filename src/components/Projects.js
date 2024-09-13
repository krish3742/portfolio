import Style from './Projects.module.css';

function Projects(props) {
    const myProject = [
        {id: 1, name: 'Quizzard - A Quiz Manager', description: 'Developed a Quiz Manager app for seamless quiz creation, editing, publishing, and analysis capabilities.', stack: 'MERN Stack, Tailwind', code: 'https://github.com/krish3742/HostedProjects/tree/main/Quizzard', live: 'https://quizzard-acwk.onrender.com/'},
        {id: 2, name: 'Tic-Tac-Toe', description: 'Developed a Tic-Tac-Toe game, allowing users to play and track their moves in real-time.', stack: 'React', code: 'https://github.com/krish3742/TriwebAPI-Learning/tree/main/Projects/Tic_Tac_Toe/tic_tac_toe', live: 'https://tictactoe-kshitij.vercel.app/'},
        {id: 3, name: 'Drawing App', description: 'Developed a drawing playground, allowing users to select different colors, draw, erase and reset.', stack: 'Vanilla JavaScript', code: 'https://github.com/krish3742/Mini-Projects/tree/main/Drawing_App', live: 'https://drawing-app-chi-brown.vercel.app/'},
        {id: 4, name: 'Currency Converter', description: 'Developed a portfolio website, allowing users to view my introduction, skills, download resume, and contact me.', stack: 'Vanilla JavaScript, Tailwind', code: 'https://github.com/krish3742/Mini-Projects/tree/main/Currency_Converter', live: 'https://currency-converter-gold-beta.vercel.app/'},
        {id: 5, name: 'TO-DO App', description: 'Developed a To-Do app, allowing users to set task, hold task, remove task, add task to favorites.', stack: 'MERN Stack', code: 'https://github.com/krish3742/TriwebAPI-Learning/tree/main/Projects/MERN%20Todo%20App', live: 'https://to-do-kshitijcodes.onrender.com/'}
    ];
    return (
        <>
            <div ref={props.project} className={Style.projectContainer}>
                <div className={Style.container}>
                    <div className={Style.firstContainers}>
                        <h1 className={Style.heading}>My Projects</h1>
                    </div>
                    <div className={Style.secondContainers}>
                        {myProject.map((project) => {
                            return (
                                <div className={Style.project} key={project.id}>
                                    <div className={Style.imgDiv}>
                                        <div className={Style.img}/>
                                    </div>
                                    <h3 className={Style.projectHeading}>{project.name}</h3>
                                    <div className={Style.stackDiv}>
                                        <p className='font-semibold pr-2'>Tech Stack:</p>
                                        <p> {project.stack}</p>
                                    </div>
                                    <p className={Style.projectPara}>{project.description}</p>
                                    <div className={Style.buttonDiv}>
                                        <button className={Style.button} onClick={() => window.open(project.code, '_blank')}>View Code</button>
                                        <button className={Style.button} onClick={() => window.open(project.live, '_blank')}>View Website</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;