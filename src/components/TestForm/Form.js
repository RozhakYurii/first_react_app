import React from "react";
import {Col, Row} from "react-bootstrap";

const Form = ({formConsoleAndSpan}) => {
    return (

        <Row>
            <Col md={10} className={"input-group center-block"}>
                <input type="text" className={"form-control center-block"} name="name" onChange={formConsoleAndSpan}
                       placeholder={55 + 10}/>
            </Col>
        </Row>
    );
};

export default Form;
