import { useRef } from "react";

class FormStore{
    constructor(){
        this.store={};
        this.fields=[];
        this.callbacks={};
    }

    validate=()=>{
        let err=[];
        this.fields.forEach(field=>{
            const {rules,name}=field.props;
            const rule=rules[0];
            if(rule){
                const {required,message}=rule;
                if(required&&!this.store[name]){
                    err.push(message)
                }
            }
        })
        return err;
    }

    submit=()=>{
        const err=this.validate();
        const {onFinish,onFinishFailed}=this.callbacks;
        if(err.length===0){
            onFinish(this.store);
        }else if(err.length>0){
            onFinishFailed(this.store,err);
        }
    }

    setCallbacks=(callbacks)=>{
        this.callbacks={
            ...this.callbacks,
            ...callbacks,
        };
    }

    registerFields=field=>{
        this.fields.push(field);
        return ()=>{
            this.fields=this.fields.filter(item=>item!==field);
            delete this.store[field.props.name];
        }
    }

    getFieldsValue=()=>{
        return {...this.store};
    }

    getFieldValue=name=>{
        return this.store[name];
    }

    setFieldsValue=newStore=>{
        this.store={
            ...this.store,
            ...newStore
        }
        this.fields.forEach(field=>{
            Object.keys(newStore).forEach(key=>{
                if(key===field.props.name){
                    field.forceUpdate();
                }
            })
        })
        console.log("setFieldsValue",this.store);
    }

    getForm=()=>{
        return {
            getFieldsValue:this.getFieldsValue,
            getFieldValue:this.getFieldValue,
            setFieldsValue:this.setFieldsValue,
            registerFields:this.registerFields,
            setCallbacks:this.setCallbacks,
            submit:this.submit,
        }
    }
}

export default function useForm(form){
    const ref=useRef();
    console.log("useForm",ref);
    if(!ref.current){
        if(form){
            ref.current=form;
        }else{
            ref.current=new FormStore();
        }
    }
    return [ref.current.getForm()];
    // const formStore=new FormStore();
    // return [formStore.getForm()];
}