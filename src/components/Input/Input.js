import React, {Component} from "react";
import Form from "../TestForm/Form";
import * as PropTypes from "prop-types";
import {Col, Grid, Row} from "react-bootstrap";

export class Input extends Component {

    constructor() {
        super();
        this.state = {
            input: ""
        };
    };

    formConsoleAndSpan = (e) => {
        console.log(e.target.value);
        this.setState({input: e.target.value});
    };

    render() {
        return <Grid>
            <Row>
                <Col xs={10} md={8} xsOffset={1} mdOffset={2}>
                    <p>Just input form that duplicates all you type in and log it to console</p>
                    <Form formConsoleAndSpan={this.formConsoleAndSpan}/>
                    <p> {this.state.input}</p>
                </Col>
            </Row>
        </Grid>;
    }
}

Input.propTypes = {
    formConsoleAndSpan: PropTypes.func,
    input: PropTypes.string
};