import { useEffect, useState } from "react";



const Banner = () => {
    const bannerNames = ['bg image0.png', 'bg image1.png', 'bg image2.png', 'bg image4.png', 'bg image5.png'];
    const [randomBanner, setRandomBanner] = useState(bannerNames[Math.floor(Math.random() * bannerNames.length)]);

    useEffect(() => {
        const imagePath = randomBanner;
        setRandomBanner(imagePath);
    }, []);

    return (
        <div>
            {randomBanner && (
                <div className="content_wrapper">
                    <div className="banner__box">
                        <div className="banner__block--box">
                            <h1 className="banner__title">Let&apos;s talk!</h1>
                            <p className="banner__text">Have a challenge? Want to develop a new source for products or services? Or simply want a new perspective from an experienced veteran? Drop us a line or give us a call. Put our superior customer service and speedy response time to the test. We&apos;re ready to help.</p>
                            <button className="banner__block--button">CALL US NOW</button>
                        </div>
                        <div className="banner__block--box">

                        </div>
                    </div>
                    <div className="img_position">
                        <img src={randomBanner} alt="banner" />
                    </div>
                </div>

            )}
        </div>
    );
};

export default Banner;
