import React from "react";
import PropTypes from "prop-types";
import BaseSnackBar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "Components/SnackBar/Alert";

const useStyles = makeStyles((theme) => ({
    snackBar: {
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

function SnackbarComponent({
    onCloseSnackBar,
    snackBarOpen,
    snackBarVariant,
    snackBarContent,
    autoHideDuration = 5000,
}) {
    const classes = useStyles();

    return (
        <BaseSnackBar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={snackBarOpen}
            autoHideDuration={autoHideDuration}
            onClose={onCloseSnackBar}
            className={classes.snackBar}
        >
            <Alert
                onClose={onCloseSnackBar}
                severity={snackBarVariant}
                children={
                    Array.isArray(snackBarContent) ? (
                        snackBarContent.map((msg, idx) => (
                            <p key={idx}>{msg}</p>
                        ))
                    ) : (
                        <p>{snackBarContent}</p>
                    )
                }
            ></Alert>
        </BaseSnackBar>
    );
}

SnackbarComponent.propTypes = {
    onCloseSnackBar: PropTypes.func.isRequired,
    snackBarOpen: PropTypes.bool.isRequired,
    snackBarVariant: PropTypes.string.isRequired,
    snackBarContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
    autoHideDuration: PropTypes.number,
};

export default SnackbarComponent;
