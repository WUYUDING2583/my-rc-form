import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
    static contextType = FieldContext;

    componentDidMount(){
        const {registerFields}=this.context;
        this.unregisterField=registerFields(this);
    }

    componentWillUnmount(){
        this.unregisterField();
    }


    getControlled = () => {
        const { name } = this.props;
        const { setFieldsValue, getFieldValue } = this.context;
        return {
            value: getFieldValue(name),
            onChange: (e) => setFieldsValue({ [name]: e.target.value })
        }
    }
    render() {
        const { children } = this.props;
        const childNode = children;
        return React.cloneElement(childNode, this.getControlled())
    }
}