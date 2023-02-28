import React from "react";
import classess from './ErrorModal.module.css';
import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = (props) => {

    return (
        <div>
            <div className={classess.backdrop} onClick={props.onConfirm} />
            <Card className={classess.modal}>
                <header className={classess.header}>
                    <h2>{props.title}</h2>
                </header >
                <div className={classess.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classess.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card >
        </div>
    )
}

export default ErrorModal;