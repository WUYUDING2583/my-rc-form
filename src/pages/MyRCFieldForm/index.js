import React, { useEffect } from "react";
import Input from "../../components/Input";
import Form, { Field, useForm } from "../../components/my-rc-field-form";

const nameRule = { required: true, message: "please input username!" };
const passwordRule = { required: true, message: "please input password!" };

// export default function MyRCFieldForm(props) {
//     const [form]=Form.useForm();

//     const onFinish=val=>{
//         console.log("onFinish",val);
//     }

//     useEffect(()=>{
//         form.setFieldsValue({username:"default"});
//     },[])

//     const onFinishFailed=val=>{
//         console.log("onFinishFailed",val);

//     }

//     // const changeContext=()=>{
//     //     form.a=1;
//     //     console.log("changecontext",form);
//     // }
//     return (
//         <>
//             <h3>MyRCFieldForm</h3>
//             {/* <button onClick={changeContext}>change context</button> */}
//             <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//                 <Field name="username" rules={[nameRule]}>
//                     <Input placeholder="username"/>
//                 </Field>
//                 <Field name="password" rules={[passwordRule]}>
//                     <Input placeholder="password"/>
//                 </Field>
//                 <button>Submit</button>
//             </Form>
//         </>
//     )
// }

export default class MyRCFieldForm extends React.Component {

    state = {
        num: 0
    }
    formRef = React.createRef();
    componentDidMount() {
        this.formRef.current.setFieldsValue({username:"default"});
    }

    onFinish = val => {
        console.log("onFinish", val);
    }


    onFinishFailed = (val,err) => {
        console.log("onFinishFailed", val,err);

    }

    render() {
        const { num } = this.state;
        return (
            <>
                <h3>MyRCFieldForm</h3>
                <button onClick={() => this.setState({ num: num + 1 })}>{num}</button>
                <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Field name="username" rules={[nameRule]}>
                        <Input placeholder="username" />
                    </Field>
                    <Field name="password" rules={[passwordRule]}>
                        <Input placeholder="password" />
                    </Field>
                    <button>Submit</button>
                </Form>
            </>
        )
    }
}