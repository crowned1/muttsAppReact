import * as React from 'react'
import './SvgIcon.css'

export default (props) => {
    // console.log(props)
    let { icon } = props.icon;
    return (
        <button className="svg-wrap">
            { icon.render() }
        </button>
    );
};