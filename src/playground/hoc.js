// higher order component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is : {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login to view info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Tes"/>, document.getElementById('app'))