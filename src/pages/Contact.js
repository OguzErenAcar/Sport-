import React from "react";
import { useFormik, Formik, Field ,Form, useField} from "formik";
import * as Yup from "yup";

function Contact() {

  const MyTextInput=({label,ContainerClasses,labelClasses,inputClasses,...props})=>{
    const [field , meta ]=useField(props)
    return(
    <div className={ContainerClasses}>
    <label className={labelClasses} htmlFor={props.name}>{label}</label>
    <input className={inputClasses} {...field} {...props}/>
    {meta.touched&& meta.error?(<div className="text-danger">{meta.error}</div>):null}

    </div>
    )
  }

  const MyTextArea=({label,ContainerClasses,labelClasses,areaClasses,...props})=>{
    const [field , meta ]=useField(props)
    return(
      <div className={ContainerClasses}>
      <label className={labelClasses} htmlFor={props.name}>{label}</label>
      <textarea className={areaClasses} {...field} {...props}/>
      {meta.touched&& meta.error?(<div className="text-danger">{meta.error}</div>):null}
      </div>
      )
  }


  return (
    <div>

      <h1 style={{marginTop:40,paddingBottom:20,fontSize:50,borderBottom:"2px solid"}} className="text text-white text-center">Contact Form</h1>
    <div  className="ContactContainer   "  >

       <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(15,"must be 15 charecters").required("Required"),
          email: Yup.string().max(15,"must be 15 charecters").required("Required"),
          phone: Yup.string().email("Invalid email adress").required("Required"),
          message:Yup.string().min(20,"must be 20 charecters").required("Required"),
        })}
        onSubmit={(values) => {
          alert("form sended. Thanks")
        }}
      >
        {(values) => (
          <Form className="form">
            
            <MyTextInput
            label="Name"
            name="name"
            type="text"
            ContainerClasses="nameInput"
            labelClasses="d-block"
            inputClasses="input d-block"/>
            <MyTextInput
            label="Email"
            name="email"
            type="text"
            ContainerClasses="emailInput"
            labelClasses="d-block"
            inputClasses="input d-block"/>
           <MyTextInput
            label="Phone"
            name="phone"
            type="text"
            ContainerClasses="phoneInput"
            labelClasses="d-block"
            inputClasses="input d-block"/>
            <MyTextArea
            label="Message"
            name="message"
            rows="6"
            ContainerClasses="messageInput"
            labelClasses="d-block"
            areaClasses="input d-block" />
            <button type="submit">Sumbit</button>
          </Form>
        )}
      </Formik> 
    </div> 
    </div>
  );
}

export default Contact;
