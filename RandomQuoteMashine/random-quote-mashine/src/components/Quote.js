import React, { useContext, useState } from 'react'
import "./styles/quote.css"
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import Modal from './Modal';
import MyContext from '../MyContext';



export default function Quote(props) {

    const { value, setValue } = useContext(MyContext)


    return (
        <div className="quote__container">

            <div className="quote__text__container" style={{ "color": props.bkgColor }} >
                <p id="text"><FormatQuoteSharpIcon className="quote__icon__start" fontSize="inherit" />Education is the most powerful weapon which you can use to change the world.
                    <FormatQuoteSharpIcon className="quote__icon__end" fontSize="inherit" /></p>
                <p id="author">- Rado Radov</p>
            </div>

            <div className="quote__buttons__container">
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => props.getColor()}>New Quote</a>
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => setValue(!value)}>Add</a>
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
    )
}
