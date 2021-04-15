import * as React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import BrandHeader from './BrandHeader';
import  ContributorsList  from './ContributorsList';
import { Container } from 'reactstrap';
import './css/Tour.css';
import './css/WhoWeAre.css';

export class WhoWeAre extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div><BrandHeader dark={true} />
                <div className='whoweare-background'>
                    <Container >
                        <h1>{i18next.t("WhoWeAre")}?</h1> 
                        <p class="description">{i18next.t("WhoWeAre1")}</p>
                        <p class="description">{i18next.t("WhoWeAre2")}</p>
                        <p class="description">{i18next.t("WhoWeAre3")}</p>
                        <p class="description">{i18next.t("WhoWeAre4")}</p>
                        <br /><br />
                        <h3>{i18next.t("OurContributors")}</h3>
                        <ContributorsList />
                    </Container>
                </div>
        </div>);
    }
}

export default withTranslation()(WhoWeAre)