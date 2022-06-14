import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div>
            {/* if props.alert is not null everything will be enabled else everything after && wont be enable */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
