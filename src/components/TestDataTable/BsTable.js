import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Col, Grid, Row} from "react-bootstrap";

const columns = [{
    dataField: 'name',
    text: 'Starship',
    sort: true
}, {
    dataField: 'model',
    text: 'Model',
    sort: true
}, {
    dataField: 'cost_in_credits',
    text: 'Cost in credits',
    sort: true
}];

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];

class BsTable extends Component {


    constructor() {
        super();
        this.state = {
            starships: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/starships/')
            .then(response => response.json())
            .then(json => {
                    console.log(json);
                    this.setState(
                        {starships: json.results}
                    );
                }
            )
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={10} md-offset={1}>
                        <BootstrapTable
                            bootstrap4
                            keyField="name"
                            data={this.state.starships}
                            columns={columns}
                            defaultSorted={defaultSorted}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }


}

export default BsTable;