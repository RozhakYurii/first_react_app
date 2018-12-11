import React, {Component} from 'react';
import DemographicDataTable from "./DemographicDataTable/DemographicDataTable";
import FaceBox from "./FaceBox/FaceBox";
import {Col, Grid, Row} from "react-bootstrap";

class PredictionResult extends Component {


    constructor() {
        super();
        this.state = {
            imageLoaded: false
        }
    }

    imageLoaded = () => {
        this.setState({
            imageLoaded: true
        })
    };

    render() {
        return (
            <Grid fluid id={'predictionresult'}>
                <Row >
                    <Col xs={10} md={5} xsOffset={1} mdOffset={1} id={'image-box'}>
                       <img id='input-image' onLoad={this.imageLoaded} src={this.props.imageUrl} alt=""/>
                        {
                            !this.state.imageLoaded || this.props.boxes === "" || this.props.boxes.length === 0 ? "" :
                                this.props.boxes.map((box, i) => <FaceBox key={i} index={i} box={this.props.boxes[i]}
                                                                          changeActiveBoxIndex={this.props.changeActiveBoxIndex}/>)
                        }
                    </Col>
                    {!this.state.imageLoaded ||
                    this.props.infoAboutFace === "" ? "" :
                        <Col xs={10} md={5} xsOffset={1} style={{
                            height: document.getElementById("input-image").height,
                            overflow: 'auto'
                        }}>
                            <DemographicDataTable face={this.props.infoAboutFace}/>
                        </Col>
                    }
                </Row>
            </Grid>

        );
    }
}

export default PredictionResult;