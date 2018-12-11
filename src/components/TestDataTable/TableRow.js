import React from "react";

const TableRow = (starship) => {

    console.log(starship.starship);

    return (
        <tr >
            <td>{starship.starship.name}</td>
            <td>{starship.starship.model}</td>
            <td>{starship.starship.cost_in_credits}</td>
        </tr>


    );
};

export default TableRow;