import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Style from './ScrollToTop.module.css';

function ScrollToTop() {
    const [showScrollTopButton, setScrollTopButton] = useState(false);
    const scrollTopSection = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setScrollTopButton(true);
            } else {
                setScrollTopButton(false);
            }
        });
    }, []);
    return (
        <>
            {showScrollTopButton && 
                <div onClick={scrollTopSection} className={Style.container}>
                    <FaAngleDoubleUp />
                </div>
            }
        </> 
    );
};

export default ScrollToTop;