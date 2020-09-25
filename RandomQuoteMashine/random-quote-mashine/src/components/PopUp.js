import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import "./styles/popUp.css"
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function PopUp() {
    const [state, setState] = React.useState({
        open: false,
        Transition: ''
    });

    const handleClick = (SlideTransition) => {
        setState({
            open: true,
            Transition: SlideTransition
        });
    };
    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (

        <div className="popUp">
            <button onClick={() => handleClick(SlideTransition)}>Submit</button>

            <Snackbar
                open={state.open}
                color="success"
                onClose={handleClose}
                disableWindowBlurListener={true}
                autoHideDuration={2000}
                TransitionComponent={state.Transition}
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>}
                message="Quote successfully added !"
                key={state.Transition}
            />
        </div>
    )
}
