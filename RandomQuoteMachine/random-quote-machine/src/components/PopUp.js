import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import "./styles/popUp.css"
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MyContext from '../MyContext';


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}
export default function PopUp() {

    const { showPopUp, setShowPopUp } = useContext(MyContext)
    const { setShowModal } = useContext(MyContext)


    const handleClose = () => {
        setShowPopUp(false)
        setShowModal(false)
    };

    return (

        <div className="popUp">
            <Snackbar
                open={showPopUp}
                color="success"
                onClose={handleClose}
                disableWindowBlurListener={true}
                autoHideDuration={2000}
                TransitionComponent={SlideTransition}
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>}
                message="Quote successfully added !"
            />
        </div>
    )
}
