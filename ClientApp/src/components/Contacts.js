import * as React from 'react';
import BrandHeader from './BrandHeader';


export class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <BrandHeader dark={true} />
        );
    }
}