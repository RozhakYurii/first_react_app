import React, {Component} from "react";
import './FaceBox.css'

class FaceBox extends Component {

    calculateFaceLocation = bounding_box => {
        const {
            left_col,
            top_row,
            right_col,
            bottom_row
        } = bounding_box;
        const image = document.getElementById("input-image");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            left: left_col * width,
            top: top_row * height,
            right: width - right_col * width,
            bottom: height - bottom_row * height
        };
    };


    render() {
        let {box, changeActiveBoxIndex, index} = this.props;
        return (
            <div id='bounding-box' onClick={() => changeActiveBoxIndex(index)} className='bounding-box'
                 style={this.calculateFaceLocation(box)}/>
        )
    }
}


export default FaceBox;