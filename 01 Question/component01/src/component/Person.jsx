import React from "react";

const Person = ({ name, age }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>age: {age}</p>
        </div>
    )
}

export default Person