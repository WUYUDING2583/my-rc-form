**English** | [**简体中文**](https://github.com/yuyi2583/my-rc-form/blob/master/README-zh_CN.md)

my-rc-form is a form component that imitates ant design 4 Form component. It can be used both in class components and function components.

## Instruction

### function component

```javascript
import React, { useEffect } from "react";
import Input from "../../components/Input";
import Form, { Field, useForm } from "../../components/my-rc-field-form";

const nameRule = { required: true, message: "please input username!" };
const passwordRule = { required: true, message: "please input password!" };

export default function MyRCFieldForm(props) {
    const [form]=Form.useForm();

    const onFinish=val=>{
        console.log("onFinish",val);
    }

    useEffect(()=>{
        form.setFieldsValue({username:"default"});
    },[])

    const onFinishFailed=val=>{
        console.log("onFinishFailed",val);

    }

    return (
        <>
            <h3>MyRCFieldForm</h3>
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Field name="username" rules={[nameRule]}>
                    <Input placeholder="username"/>
                </Field>
                <Field name="password" rules={[passwordRule]}>
                    <Input placeholder="password"/>
                </Field>
                <button>Submit</button>
            </Form>
        </>
    )
}
```

### class component

```javascript
import React from "react";
import Input from "../../components/Input";
import Form, { Field, useForm } from "../../components/my-rc-field-form";

const nameRule = { required: true, message: "please input username!" };
const passwordRule = { required: true, message: "please input password!" };

export default class MyRCFieldForm extends React.Component {

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
```

