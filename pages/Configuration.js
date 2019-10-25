import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css";
import { FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { bindActionCreators } from "redux";
import { SubmitConfiguration } from "../pages/Actions/ConfigurationAction";
import { connect } from 'react-redux';
class Configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonType: 'option1'
        }
    }
    handleOnChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        },()=>console.log("selected----",this.state.buttonType))
    }
    handleSubmit = () => {
        const { buttonType } = this.state;
        console.log("selected", buttonType)
    }
    render() {
        return (
            <div>
                <div className="enable-disable"><p>Your Share Button is currently disable</p><Button>Enable</Button></div>
                <div className="all-main-container">
                    <Form>
                        <FormGroup tag="fieldset">
                            <p>Select WhatsApp Share button </p>
                            <div style={{ display: "flex" }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                            type="radio" 
                                            name="radio1" 
                                            value="option1" 
                                            onChange={(e) => this.handleOnChange(e, "buttonType") }
                                            checked={this.state.buttonType === 'option1'} />{' '}
                                        <FaWhatsapp color="green" size="2.5em" />
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio"
                                        name="radio1"
                                        value="option2"
                                        onChange={(e) => this.handleOnChange(e, "buttonType")}
                                        checked={this.state.buttonType === 'option2'} />{' '}
                                        <FaWhatsappSquare color="green" size="2.5em" />
                                    </Label>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <Button onClick={()=>this.handleSubmit()}>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ConfigData: state.ConfigurationReducer.WA_config
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ SubmitConfiguration }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Configuration);