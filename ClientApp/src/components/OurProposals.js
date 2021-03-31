import * as React from 'react';
import BrandHeader from './BrandHeader';
import i18next from 'i18next';

export class OurProposals extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<BrandHeader dark={true} />);
    }
}