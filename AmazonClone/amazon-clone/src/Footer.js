
import React from 'react'
import './footer.css'

function Footer() {

    const goTop = () => window.scrollTo({ top: 0, lef: 0, behavior: "smooth" });


    return (
        <div className="footer">
            <button onClick={goTop} className="footer__sliderToTop">Back to top</button>
        </div>
    )
}

export default Footer
