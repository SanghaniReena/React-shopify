
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css";
import { FaWhatsapp,FaWhatsappSquare } from 'react-icons/fa';

const Index = () => {
    const [Submit, setSubmit] = useState(false);
    return (
        <div className="all-main-container">
            <Form>
                <FormGroup tag="fieldset">
                  
                    <legend>Select WhatsApp Share button </legend>
                    <div style={{display:"flex"}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value="option1" />{' '}
                            <FaWhatsapp color="green" size="2em"/>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value="option2" />{' '}<FaWhatsappSquare color="green" size="2em"/>
                        </Label>
                    </FormGroup>
                    </div>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default Index;
