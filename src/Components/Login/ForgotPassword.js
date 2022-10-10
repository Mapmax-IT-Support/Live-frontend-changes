import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
export default function ForgotPassword() {
    const [email, setemail] = useState('')
    const [isValidated, setisValidated] = useState(true)
  const handleSubmit=(e)=>{
e.preventDefault();
console.log('entered email',email)
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const onFormChange=(e)=>{
    console.log('test',e.target.value,e.target.name)
    setemail(e.target.value)
    // let update = { ...this.state[e.target.name] }

    // update.value = e.target.value
    // update.target = e.target

  }
    return (
        <div className="loginPage">
            <h1>Forgot Password</h1>
        <div className="loginFormContainer" >
           <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
           <Form.Row>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label className="formLabels">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        autoFocus
                        required
                        name="email"
                        value={email}
                        onChange={onFormChange}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                        <span type="invalid" className="errorText">
                            {email.message}
                        </span>
                </Form.Group>
            </Form.Row>
            
            
            <Form.Row className="submitContainer">
                <Button variant="primary" type="submit" disabled={!validateEmail(email)}>Submit</Button>
            </Form.Row>
           
        
           
        </Form>

        </div>
      
        </div>
    );
}
