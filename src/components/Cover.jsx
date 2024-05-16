import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-2/3 bg-[#15151599] md:h-60 text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Would you like to try a dish?</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;