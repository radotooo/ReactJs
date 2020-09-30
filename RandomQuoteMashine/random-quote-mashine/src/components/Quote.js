/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import "./styles/quote.css"
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import MyContext from '../MyContext';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Quote(props) {

    const { showModal, setShowModal } = useContext(MyContext)

    const [data, setData] = useState({
        title: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    })

    const [showSpinner, setShowSpinner] = useState(false)


    const fetchData = async () => {
        try {
            setShowSpinner(true)
            const response = await fetch('https://rnnd-app20.herokuapp.com/api')
            const data = await response.json();
            const { title, author } = data[0];
            setData({ title, author })

        } catch (error) {
            console.log(error.message);
        }
        setShowSpinner(false)
    }

    return (
        <div className="quote__container">

            <div className="quote__text__container" style={{ "color": props.bkgColor }} >
                <p id="text"><FormatQuoteSharpIcon className="quote__icon__start" fontSize="inherit" />{data.title}
                    <FormatQuoteSharpIcon className="quote__icon__end" fontSize="inherit" /></p>
                <p id="author">- {data.author}</p>
            </div>

            <div className="quote__buttons__container">
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => { props.getColor(); fetchData() }}>{showSpinner ? <CircularProgress size={15} /> : "New"}</a>
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => setShowModal(!showModal)}>Add</a>
                <div className="quote__socialMediaButtons__container">
                    <TwitterShareButton title="Random Quote Machine" url="https://pensive-boyd-fe627b.netlify.app">
                        <TwitterIcon className="twitter" size={42} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton className="facebook" quote="Random Quote Machine" url="https://pensive-boyd-fe627b.netlify.app">
                        <FacebookIcon size={42} round={true} />
                    </FacebookShareButton>
                </div>
            </div>
        </div>
    )
}
