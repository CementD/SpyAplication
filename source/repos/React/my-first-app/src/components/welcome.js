import React from "react";
import Test from "./test";

function Welcome({ name }) {
    return (
        <>
            <h1>Welcome, {name}!</h1>
            <Test/>
        </>
    );
}

export default Welcome;
