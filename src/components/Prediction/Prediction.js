import React, {Component} from "react";
import Clarifai from "clarifai";
import PredictionResult from "./PredictionResult/PredictionResult";
import {Button, Col, FormControl, FormGroup, Grid, InputGroup, Row} from "react-bootstrap";
import regionsMock from './DataMocks';
import clarifyAppConfiguration from '../../ClarifaiAPIConfiguration';

const mockDataAboutPhoto = regionsMock;
const mockImageURL = "https://www.incimages.com/uploaded_files/image/1940x900/faces-pano_26145.jpg";

class Prediction extends Component {


    constructor(props) {
        super(props);
        this.state = {
            app: new Clarifai.App(clarifyAppConfiguration),
            dataAboutPhoto: [],
            imageUrl: "",
            somethingWrong: false,
            activeBoxIndex: 0,
            imageExists: false
        }
    }

    onInputChange = (event) => {
       this.setState(
            {
                imageUrl: event.target.value,
                somethingWrong: false,
                dataAboutPhoto: [],
                activeBoxIndex: 0
            }
        );
       this.checkImageExists(event.target.value);
    };


    mockOnButtonSubmit = () => {
        this.setState({
            imageUrl: mockImageURL,
            dataAboutPhoto: mockDataAboutPhoto
        })
    };

    onButtonSubmit = () => {
        this.state.app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.imageUrl)
            .then((response) => {
                this.setState(
                    {
                        dataAboutPhoto: response.outputs[0].data.regions
                    }
                )
            })
            .catch(() => {
                    this.setState({
                        somethingWrong: true
                    })
                }
            );
    };

    changeActiveBoxIndex = (newIndex) => {
        this.setState(
            {
                activeBoxIndex: newIndex
            }
        )
    };

    checkImageExists = (imageUrl) => {
        let img = new Image();
        this.setState({
            imageExists: false
        });
        img.onload = () => this.setState({
            imageExists: true
        });
        img.onabort = () => this.setState({
            imageExists: false
        });
        img.src = imageUrl;
    };


    noDataAboutPhoto() {
        return this.state.dataAboutPhoto == null || this.state.dataAboutPhoto.length === 0;
    }


    getFaceBoxes() {
        return this.noDataAboutPhoto() ? "" : this.state.dataAboutPhoto.map((region) => region.region_info.bounding_box);
    }


    render() {
        return (
            <Grid>
                <Row my={2}>
                    <Col xs={10} md={6} xsOffset={1} mdOffset={3}>
                        <p>Let me tell you something about that person on your picture.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={6} xsOffset={1} mdOffset={3}>
                        <FormGroup>
                            <InputGroup>
                                <FormControl onInput={this.onInputChange} type="text"/>
                                <InputGroup.Button>
                                    <Button onClick={this.onButtonSubmit}
                                            disabled={!this.state.imageExists}>Detect</Button>
                                    <Button onClick={this.mockOnButtonSubmit}>FakeDetect</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                {this.state.imageUrl === "" ? "" :
                    <PredictionResult
                        imageUrl={this.state.imageUrl}
                        infoAboutFace={this.noDataAboutPhoto() ? "" : this.state.dataAboutPhoto[this.state.activeBoxIndex].data.face}
                        boxes={this.getFaceBoxes()}
                        changeActiveBoxIndex={this.changeActiveBoxIndex}
                    />
                }
            </Grid>
        );
    }
}

export default Prediction;