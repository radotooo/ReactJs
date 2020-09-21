
import React from 'react'
import './footer.css'

function Footer() {

    const goTop = () => window.scrollTo({ top: 0, lef: 0, behavior: "smooth" });


    return (
        <div className="footer">
            <button onClick={goTop} className="footer__sliderToTop">Back to top</button>
            <div className="footer__nav__container">
                <div className="footer__nav">
                    <div className="footer__nav__section">
                        <h2>Get to Know Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>About Us</li>
                            <li>UK Modern Slavery Statement</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    <div className="footer__nav__section">
                        <h2>Make Money with Us</h2>
                        <ul>
                            <li>Sell on Amazon</li>
                            <li>Sell Under Private Brands</li>
                            <li>Sell on Amazon Business</li>
                            <li>Sell on Amazon Handmade</li>
                            <li>Sell on Amazon Launchpad</li>
                            <li>Associates Programme</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Seller Fulfilled Prime</li>
                            <li>Advertise Your Products</li>
                            <li>Independently Publish with Us</li>
                            <li>Amazon Pay</li>
                            <li>Host an Amazon Hub</li>
                        </ul>
                    </div>
                    <div className="footer__nav__section">
                        <h2>Amazon Payment Methods</h2>
                        <ul>
                            <li>Amazon Platinum Mastercard</li>
                            <li>Amazon Classic Mastercard</li>
                            <li>Amazon Money Store</li>
                            <li>Gift Cards</li>
                            <li>Amazon Currency Converter</li>
                            <li>Payment Methods Help</li>
                            <li>Shop with Points</li>
                            <li>Top Up Your Account</li>
                            <li>Top Up Your Account in Store</li>
                        </ul>
                    </div>
                    <div className="footer__nav__section">
                        <h2>Let Us Help You</h2>
                        <ul>
                            <li>COVID-19 and Amazon</li>
                            <li>Track Packages or View Orders</li>
                            <li>Delivery Rates & Policies</li>
                            <li>Amazon Prime</li>
                            <li>Returns & Replacements</li>
                            <li>Recycling</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Amazon Mobile App</li>
                            <li>Amazon Assistant</li>
                            <li>Customer Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__nav__bottomPart">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                <div className="footer__nav__bottomPart__list">
                    <ul>
                        <li>Conditions of Use &amp; Sale</li>
                        <li>Privacy Notice</li>
                        <li>Cookies Notice</li>
                        <li>Interest-Based Ads Notice</li>
                        <li className="footer__nav__bottomPart__list__last">© 1996-2020, Amazon.com, Inc. or its affiliates</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Footer
