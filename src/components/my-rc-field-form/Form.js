import React, { useImperativeHandle } from "react";
import { useForm } from ".";
import FieldContext from "./FieldContext";

export default function Form({ form, onFinish, onFinishFailed, children }, ref) {
    const [formInstance] = useForm(form);
    useImperativeHandle(ref, () => formInstance);
    formInstance.setCallbacks({onFinish, onFinishFailed});
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            formInstance.submit();
        }}>
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}