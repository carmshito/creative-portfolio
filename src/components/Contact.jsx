import React, { useRef, useState } from "react";
import "../styles/Contact.scss";
import { Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";


const Contact = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6xwll9m', 'template_n1nn5us', formRef.current, 'bWnMhGgo6fM3GHf6I')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "", 
          })
      }, (error) => {
          console.log(error.text);
      });
  };

 

  return (
    <div className="contact">
      <div className="contact-bg">
        <Row>
          <div className="contact-left">
            <h1 className="contact-title">Let's connect!</h1>
            <p className="contact-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium repellat sed quae, id vero possimus obcaecati. Repudiandae quis dolore reiciendis eum culpa. Consequuntur quasi omnis esse eum, eligendi libero.</p>
          </div>
          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" value={formValues.firstName} onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value})} placeholder="First Name" name="user_first_name" />
              <input type="text" value={formValues.lastName} onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value})} placeholder="Last Name" name="user_last_name" />
              <input type="text" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value})} placeholder="Email" name="user_email" />
              <input type="text" value={formValues.phoneNumber} onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value})} placeholder="Phone Number" name="user_phone" />
              <textarea value={formValues.message} onChange={(e) => setFormValues({ ...formValues, message: e.target.value})} placeholder="Message" name="message" id="" rows="6"></textarea>
              <button>send message</button>
              {done}
            </form>
          </div>
        </Row>
      </div>
    </div>
  )
}


export default Contact
