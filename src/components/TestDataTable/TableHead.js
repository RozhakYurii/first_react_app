import React from "react";

const TableHead = (starship) => {

    console.log(starship.starship);

    return (
        <thead>
        <tr>
            <td>Starship</td>
            <td>Model</td>
            <td>Cost in credits</td>
        </tr>
        </thead>


    );
};

export default TableHead;