import React from 'react';
import './Overview.scss';
import {Card} from "../../Components/Card/Card";

export const Overview = () => {
    return (
        <div className="overview">
            <Card title={"Universal"} copy={"Web applications should be accessible to everyone."} />
            <Card title={"Intuitive"} copy={"I love to build applications that users enjoy."} />
            <Card title={"Collobrative"} copy={"Design, product, and development teams don’t work in a bubble"} />
            <Card title={"Maintainable"} copy={"Fixing bugs isn’t such a chore if the code makes sense and is well tested."}/>
        </div>
    );
}