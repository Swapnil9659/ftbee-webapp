import React, {useEffect, useState} from "react";
import { FaAngleUp } from 'react-icons/fa';

const BackToTopBtn = () =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
     }, []);

     const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };   

    return (
        <button className="btn-scrollTop text-uppercase" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
        <FaAngleUp/>  Back To Top 
       </button>
    );
}
export default BackToTopBtn;