import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Col, Grid, Row} from "react-bootstrap";

const ageAppearance = [{
    dataField: 'name',
    text: 'Age appearance',
    sort: true
}, {
    dataField: 'value',
    text: 'Probability',
    sort: true
},];
const defaultSorted = [{
    dataField: 'value',
    order: 'desc'
}];

const genderAppearance = [{
    dataField: 'name',
    text: 'Gender appearance',
    sort: true
}, {
    dataField: 'value',
    text: 'Probability',
    sort: true
},];

const multiculturalAppearance = [{
    dataField: 'name',
    text: 'Multicultural appearance',
    sort: true
}, {
    dataField: 'value',
    text: 'Probability',
    sort: true
},];


const DemographicDataTable = ({face}) => {


    return (
        <div>
            {
                face == null ? "" :
                    <Grid fluid>
                        <Row>
                            <Col >
                                <BootstrapTable
                                    bootstrap4
                                    keyField="name"
                                    data={face.age_appearance.concepts.slice(0, 5)}
                                    columns={ageAppearance}
                                    defaultSorted={defaultSorted}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <BootstrapTable
                                    bootstrap4
                                    keyField="name"
                                    data={face.gender_appearance.concepts}
                                    columns={genderAppearance}
                                    defaultSorted={defaultSorted}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <BootstrapTable
                                    bootstrap4
                                    keyField="name"
                                    data={face.multicultural_appearance.concepts}
                                    columns={multiculturalAppearance}
                                    defaultSorted={defaultSorted}
                                />
                            </Col>
                        </Row>
                    </Grid>
            }
        </div>
    )
};

export default DemographicDataTable;