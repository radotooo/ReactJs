import React, { useState } from 'react'
import "./styles/quote.css"
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import Modal from './Modal';



export default function Quote() {

    const [color, setColor] = useState('#002366')

    const getColor = () => {
        let rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        if (rndColor === "#FFFFFF") {
            return setColor("#002366")
        }
        setColor(rndColor)
    }

    return (
        <div className="quote" style={{ backgroundColor: color }}>
            <Modal bkgColor={color} />
            <div className="quote__container">

                <div className="quote__text__container" style={{ "color": color }} >
                    <p id="text"><FormatQuoteSharpIcon className="quote__icon__start" fontSize="inherit" />Education is the most powerful weapon which you can use to change the world.
                    <FormatQuoteSharpIcon className="quote__icon__end" fontSize="inherit" /></p>
                    <p id="author">- Rado Radov</p>
                </div>

                <div className="quote__buttons__container">
                    <a className="quote__button" style={{ "backgroundColor": color }} onClick={() => getColor()}>New Quote</a>
                    <a className="quote__button" style={{ "backgroundColor": color }} onClick={() => getColor()}>Add</a>

                    {/* <a className="quote__button" onClick={() => getColor()}>Share</a> */}
                    <div className="quote__socialMediaButtons__container">
                        <TwitterShareButton>
                            <TwitterIcon className="twitter" size={42} round={true} />
                        </TwitterShareButton>
                        <FacebookShareButton className="facebook" quote="dsadasdasdadsa" url="google.com">
                            <FacebookIcon size={42} round={true} />
                        </FacebookShareButton>
                    </div>
                </div>


            </div>
        </div>
    )
}
