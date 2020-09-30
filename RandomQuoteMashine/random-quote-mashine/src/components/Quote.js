/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import "./styles/quote.css"
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import MyContext from '../MyContext';



export default function Quote(props) {

    const { showModal, setShowModal } = useContext(MyContext)
    const [data, setData] = useState({})

    const fetchData = async () => {
        const response = await fetch('https://rnnd-app20.herokuapp.com/api')
        const data = await response.json();
        const { title, author } = data[0];
        setData({ title, author })
    }
    useEffect(() => {

        fetchData()
    }, [])

    return (
        <div className="quote__container">

            <div className="quote__text__container" style={{ "color": props.bkgColor }} >
                <p id="text"><FormatQuoteSharpIcon className="quote__icon__start" fontSize="inherit" />{data.title}
                    <FormatQuoteSharpIcon className="quote__icon__end" fontSize="inherit" /></p>
                <p id="author">- {data.author}</p>
            </div>

            <div className="quote__buttons__container">
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => { props.getColor(); fetchData() }}>New</a>
                <a className="quote__button" style={{ "backgroundColor": props.bkgColor }} onClick={() => setShowModal(!showModal)}>Add</a>
                <div className="quote__socialMediaButtons__container">
                    <TwitterShareButton>
                        <TwitterIcon className="twitter" size={42} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton className="facebook" quote={data.title} url="https://pensive-boyd-fe627b.netlify.app">
                        <FacebookIcon size={42} round={true} />
                    </FacebookShareButton>
                </div>
            </div>
        </div>
    )
}
