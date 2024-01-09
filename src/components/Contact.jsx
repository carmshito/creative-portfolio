import React, { useRef } from "react";
import "../styles/Contact.scss";
import { Col, Row } from "react-bootstrap";

const Contact = () => {

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }


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
              <input type="text" placeholder="First Name" name="user_first_name" />
              <input type="text" placeholder="Last Name" name="user_last_name" />
              <input type="text" placeholder="Email" name="user_email" />
              <input type="text" placeholder="Phone Number" name="user_phone" />
              <textarea placeholder="Message" name="message" id="" rows="6"></textarea>
              <button>send message</button>
            </form>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Contact
