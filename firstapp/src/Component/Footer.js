import React from 'react';

const Footer = (props) => {
    console.log("in Footer",props)
    return(
        <>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.year} {props.month}</h2>
            </center>
        </>
    )
}

export default Footer;