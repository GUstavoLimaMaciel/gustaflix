import React from 'react';

function Button(props){


    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default Button;