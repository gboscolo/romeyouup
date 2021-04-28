import React from 'react';
import ReactLoading from 'react-loading';

export class LoadingAnimation extends React.Component {
    render() {
        let style = { width: "100%" , textAlign: "center"}
        return <div style={ style }><ReactLoading
            color="#666666"
            className="loading-item"
        /></div>
    }
}