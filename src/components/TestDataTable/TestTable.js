import React, {Component} from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";


class TestTable extends Component {


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
            <div className={"row my-3"}>
                <div className={"col-md-10 col-md-offset-1"}>
                    <table className={"table"}>
                        <TableHead/>
                        <tbody>
                        {
                            this.state.starships.map(
                                (starship, i) =>
                                    <TableRow key={i} starship={starship}/>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


}

export default TestTable;