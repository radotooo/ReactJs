import React from 'react'
import "./styles/modal.css"
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    root: {
        marginBottom: 10

    },
});

export default function Modal(props) {

    const classes = useStyle();

    return (
        <div className="modal">
            <div className="modal__container">
                <form action="submit" className="form">
                    <div>
                        <TextField
                            className={classes.root}
                            id="outlined-multiline-static"
                            label="Quote"
                            multiline
                            rows={3}
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
                            />
                        </div>
                    </div>
                    <div className="modal__button_container">
                        <a className="modal__button" style={{ backgroundColor: props.bkgColor }}>Submit</a>
                        <a className="modal__button" style={{ backgroundColor: props.bkgColor }}> Cancel</a>

                    </div>
                </form>
            </div>
        </div>
    )
}

