import Style from './Home.module.css';

function Home(props) {
    const handleDownloadResumeClick = (evt) => {
        evt.preventDefault();
        const pdfUrl = require('../documents/Resume.pdf');
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Kshitij Agrawal Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div ref={props.home} className={Style.heroContainer}>
                <div className="relative isolate w-screen flex items-center justify-center">
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className={Style.container}>
                        <div className="my-4 w-[2/4] h-min max-w-xl flex items-center justify-center">
                            <div className="w-min lg:w-max">
                                <p className="text-xl font-bold tracking-tight text-white lg:text-2xl">
                                    Hello 👋,
                                </p>
                                <p className="text-7xl leading-11 font-bold text-[#8121D0] lg:text-8xl">
                                    I'm a Web Developer
                                </p>
                                <p className="my-4 text-2xl leading-20 font-bold text-white tracking-wide">
                                    I build things for web 
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <img className="inline-block mt-1 h-6 w-6 bg-cover cursor-pointer" src={require('../documents/GitHub.png')} alt="GitHub" onClick={() => window.open('https://github.com/krish3742', '_blank')} />
                                    <img className="inline-block h-8 w-8 bg-cover cursor-pointer" src={require('../documents/Linkedin.png')} alt="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/kshitij-agrawal2002/', '_blank')}/>
                                    <img className="inline-block mt-1 h-6 w-6 bg-cover cursor-pointer" src={require('../documents/Instagram.png')} alt="Instagram" onClick={() => window.open('https://www.instagram.com/kshi.tizagrawal?igsh=c2R4dTdqdmQybXRp&utm_source=qr', '_blank')}/>
                                    <img className="inline-block h-8 w-8 bg-cover cursor-pointer" src={require('../documents/Twitter.png')} alt="Twitter" onClick={() => window.open('https://x.com/Kshitij96248017', '_blank')}/>
                                </div>
                                <div className="max-w-fit my-2 cursor-pointer">
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white/40 ring-1 ring-white/10 hover:ring-white/20 hover:text-white/80" onClick={(evt) => handleDownloadResumeClick(evt)}>
                                        Download Resume
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className={Style.imgDiv}>
                            <img className="bg-contain h-min" src={require('../documents/MyImage.png')} alt="MyImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8 bg-[#291C3A]">
                <div className="flex h-16 items-center justify-evenly">
                    <div className="flex items-center gap-3">
                        <p className="text-5xl font-bold text-white">6</p>
                        <div className="text-sm text-[#DCCFED] tracking-widest">
                            <p>MONTHS OF</p>
                            <p>EXPERIENCE</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-shrink-0 sm:items-center sm:gap-4">
                        <img className="h-8 w-auto bg-cover" src={require('../documents/Java.png')} alt="Java" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/HTML.png')} alt="HTML" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/CSS.png')} alt="CSS" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/JS.png')} alt="JavaScript" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/MongoDB.png')} alt="MongoDB" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/MySQL.png')} alt="MySQL" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/Express.png')} alt="Express.js" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/React.png')} alt="React.js" />
                        <img className="h-8 w-auto bg-cover" src={require('../documents/Node.png')} alt="Node.js" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;