import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Carousel.scss";

function Carousel({ imgs = [] }) {
    const [currentImg, setCurrentImg] = useState(0);
    const length = imgs.length;
    const prevSlide = () => {
        setCurrentImg((prev) => (prev === 0 ? length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setCurrentImg((prev) => (prev === length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="carousel">
            <div
                className="imgs-wrapper"
                style={{
                    width: `${100 * length}vw`,
                    transform: `translateX(-${currentImg * 100}vw)`,
                }}>
                {imgs.map((url) => {
                    return <img src={url} key={url} />;
                })}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
