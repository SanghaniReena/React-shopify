// import {Button, Form, FormGroup, Label, Input } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css"
// const Index = () => (

//     <div className="all-main-container">
//         <Form>
//                 <div className="main-title">Hi there!!</div>
//                 <FormGroup>
//                     <Label>Name</Label>
//                     <Input type="Name" placeholder="Enetr your name.." />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="exampleSelect">Select Gender</Label>
//                     <Input type="select" name="gender">
//                         <option>Male</option>
//                         <option>Female</option>
//                         <option>Other</option>
//                     </Input>
//                 </FormGroup>
//                 <Button color="primary">Submit</Button>
//         </Form>
//     </div>

// );

// export default Index;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css";
// const WpOption1 = require("../assets/Wa1.png");
// const WpOption2 = require("../assets/wa2.jpg");
const Index = () => {
  return (
    <div className="all-main-container">
    <Form>
      {/* <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}
      <FormGroup tag="fieldset">
          
        <legend>Select WhatsApp Share button</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            {/* <img height="15px" width="15px" src={"../assets/Wa1.png"} alt="ss" ></img> */}
            <i class="fa fa-whatsapp"></i>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            <img height="15px" width="15px" src={"../assets/wa2.jpg"} alt="ss" ></img>
          </Label>
        </FormGroup>
        {/* <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup> */}
      </FormGroup>
      {/* <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup> */}
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default Index;
