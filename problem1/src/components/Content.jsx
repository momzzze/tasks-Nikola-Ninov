
const Content = () => {
    return (
        <div className="content_wrapper">
            <div className="content__container">
            <div className="frame__box--1">
                <h2 className="content__header">Contact</h2>
                <p className="content__text">Tell us about your project and let&apos;s create something together.</p>
                <div className="content__email--box">
                    <div>Email:</div>
                    <div>contact@business.com</div>
                </div>
                <div className="content__phone--box">
                    <div>Phone:</div>
                    <div>555-555-555</div>
                </div>
                <div className="content__line"></div>
                <div className="second__box">
                    <h3 className="second__box--header">Working Hours</h3>
                    <p className="second__box--p">MON-FRI: 9:00 AM - 6:00 PM</p>
                </div>
            </div>
            <div className="frame__box--2">              
                <img src="/public/image 3.png" alt="map" />
            </div>
        </div>
        </div>
    )
}
export default Content