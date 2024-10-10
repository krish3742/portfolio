import Style from './Experience.module.css';

function Experience(props) {
    return (
        <>
            <div ref={props.edex} className={Style.experienceContainer}>
                <div className={Style.container}>
                    <div className={Style.firstContainers}>
                        <h1 className={Style.heading}>Education & Experience</h1>
                    </div>
                    <div className={Style.secondContainers}>
                        <div className={Style.secondsContainer}>
                            <div className='flex flex-col gap-1 justify-start items-center'>
                                <div className="inline-block h-4 w-4 bg-black rounded-full opacity-70 ring-2 ring-white" />
                                <div className={Style.line}></div>
                                <div className="inline-block h-4 w-4 bg-black rounded-full opacity-70 ring-2 ring-white" />
                                <div className={Style.line}></div>
                                <div className="inline-block h-4 w-4 bg-black rounded-full opacity-70 ring-2 ring-white" />
                                <div className={Style.line}></div>
                            </div>
                            <div className={Style.contentDiv}>
                                <div className={Style.bcontent}>
                                    <p className={Style.years}>2020 - 2024</p>
                                    <h4 className='font-bold'>B.Tech</h4>
                                    <p className='min-w-full'>Galgotias University</p>
                                    <p>7.83 CGPA</p>
                                </div>
                                <div className={Style.iContent}>
                                    <p className={Style.years}>2019 - 2020</p>
                                    <h4 className='font-bold'>Intermediate</h4>
                                    <p>NIOS Board</p>
                                    <p>PCM - 72.86%</p>
                                </div>
                                <div className={Style.hContent}>
                                    <p className={Style.years}>2016 - 2017</p>
                                    <h4 className='font-bold min-w-full'>High School</h4>
                                    <p>ICSE Board</p>
                                    <p>PCMB - 75.33%</p>
                                </div>
                            </div>
                        </div>
                        <div className={Style.secondsContainer}>
                            <div className='flex flex-col gap-1 justify-start items-center'>
                                <div className="inline-block h-4 w-4 bg-black rounded-full opacity-70 ring-2 ring-white" />
                                <div className={Style.experienceline}></div>
                                <div className="inline-block h-4 w-4 bg-black rounded-full opacity-70 ring-2 ring-white" />
                                <div className={Style.experienceline}></div>
                            </div>
                            <div className={Style.contentDiv}>
                                <div className={Style.mernContent}>
                                    <p className={Style.years}>2024 - Present</p>
                                    <h4 className='font-bold'>SinQlarity</h4>
                                    <p className='min-w-full'>MERN Stack Developer</p>
                                    <p className={Style.para}>Gained proficiency in MERN Stack through hands-on project learning.</p>
                                </div>
                                <div className={Style.cContent}>
                                    <p className={Style.years}>2021 - 2023</p>
                                    <h4 className='font-bold'>TechnoJam</h4>
                                    <p>Club Member</p>
                                    <p className={Style.para}>Paricipated and conducted several hackathons at college level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;