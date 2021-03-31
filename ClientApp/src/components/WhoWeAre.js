import * as React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import BrandHeader from './BrandHeader';

export class WhoWeAre extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<BrandHeader dark={true} />);
    }
}