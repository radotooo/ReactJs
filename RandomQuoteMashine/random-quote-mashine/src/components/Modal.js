/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import "./styles/modal.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import MyContext from '../MyContext';
import PopUp from "./PopUp";

const useStyle = makeStyles({
    root: {
        marginBottom: 10
    },

});

export default function Modal(props) {

    const { showModal, setShowModal } = useContext(MyContext)
    const { showPopUp, setShowPopUp } = useContext(MyContext)

    const classes = useStyle();

    const [quoteState, setQuoteState] = useState({
        input: '',
        error: false,
        errorMsg: ""
    })

    const [authorState, setAuthorState] = useState({
        input: '',
        error: false,
        errorMsg: ""
    })

    const cssStyle = [
        "modal",
        showModal ? "fadeIn" : "fadeOut"
    ]

    const fetchData = async () => {
        const request = await fetch('https://rnnd-app20.herokuapp.com/api', {
            method: 'POST',
            body: JSON.stringify({
                title: quoteState.input,
                author: authorState.input,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        console.log(request)
        if (request.status === 200) {
            setShowPopUp(true)
        }
    }

    const handleSubmit = (e) => {
        if (quoteState.input.trim().length === 0) {
            setQuoteState((state) => ({
                ...state,
                error: true,
                errorMsg: "Quote is Required!"
            }));
        }
        if (authorState.input.trim().length === 0) {
            setAuthorState((state) => ({
                ...state,
                error: true,
                errorMsg: "Author is Required!"
            }));
        }
        if (quoteState.input.trim().length > 0 && authorState.input.trim().length > 0) {
            fetchData()
        }
    }

    const resetState = () => {
        setQuoteState((state) => ({
            ...state,
            error: false,
            errorMsg: ""
        }));
        setAuthorState((state) => ({
            ...state,
            error: false,
            errorMsg: ""
        }));
    }

    return (
        <div className={cssStyle.join(' ')}  >
            <div className="modal__container">
                <form id="form" type="submit" onSubmit={(e) => (e.preventDefault())}>
                    <div>
                        <TextField
                            className={classes.root}
                            id="outlined-multiline-static"
                            label="Quote"
                            multiline
                            rows={3}
                            error={quoteState.error}
                            helperText={quoteState.errorMsg}
                            onChange={(e) => { setQuoteState({ ...e, input: e.target.value }) }}
                            fullWidth
                            variant="outlined"
                            autoFocus
                        />
                    </div>
                    <div>
                        <div className="container">
                            <TextField
                                className={classes.root}
                                label="Author Name"
                                margin="dense"
                                variant="outlined"
                                error={authorState.error}
                                helperText={authorState.errorMsg}
                                onChange={(e) => { setAuthorState({ ...e, input: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <div className="modal__button_container">
                        <a className="modal__button" onClick={() => handleSubmit()} style={{
                            backgroundColor: props.bkgColor
                        }}>Submit</a>
                        <a className="modal__button" style={{
                            backgroundColor: props.bkgColor
                        }} onClick={(e) => {
                            setShowModal(!showModal); resetState();
                        }}> Cancel</a>
                    </div>
                </form>
                <PopUp />
            </div>
        </div >
    )
}

