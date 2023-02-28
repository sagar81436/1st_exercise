import React from "react";

const UserItem = (props) => {
    return <ul>
        <h2>{props.userName} {props.age}</h2>
    </ul>
}

export default UserItem;