import React from 'react';
const Header = (props) => {
    return <React.Fragment>
        <h1>Waterflow simulator</h1><br/>
            <h3>{props.content}</h3>
    </React.Fragment>
}
export default Header;