import * as React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import BrandHeader from './BrandHeader';
import  ContributorsList  from './ContributorsList';

export class WhoWeAre extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<div><BrandHeader dark={true} />
            <ContributorsList />
        </div>);
    }
}