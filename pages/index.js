import Link from 'next/link';
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
const Index = () => (

    <div className="all-main-container">
        <Form>
                <div className="main-title">Hi there!!</div>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="Name" placeholder="Enetr your name.." />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Gender</Label>
                    <Input type="select" name="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Input>
                </FormGroup>
                <Button color="primary">Submit</Button>
        </Form>
    </div>

);

export default Index;