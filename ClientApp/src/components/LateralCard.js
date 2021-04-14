import * as React from 'react';
import "./css/LateralCard.css";
import FiltersTab from './FiltersTab';
import CardsCarousel from './CardsCarousel';
import ToursCarousel from './ToursCarousel';
import Footer from './Footer';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { LoginMenu } from './api-authorization/LoginMenu';
import { LoggedUserMenu } from './api-authorization/LoggedUserMenu';
export class LateralCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentToursFilter: 0 };
    }

    render() {
        let categories = [{ id: 0, label: i18next.t("All") }, { id: 1, label: i18next.t("Experiences") }, { id: 2, label: i18next.t("Walkingtours") }, { id: 3, label: i18next.t("Museums") }];
        let onFilterChange = (value) => {
            this.setState({ currentToursFilter: value });
        };

        return (
            <div className="lateral-card col-lg-4 col-sm-12">
                <LoggedUserMenu/>
                <div className="d-none d-lg-block d-xl-block">                    
                    <h2>{i18next.t("DiscoverWhatWeHaveForYou")}</h2>
                </div>
                <FiltersTab items={categories} selectedItem={0} onChange={onFilterChange} />
                <ToursCarousel filter={this.state.currentToursFilter} />
                <h2>{i18next.t("ReadOneOfOurPost")}</h2>
                <CardsCarousel filter={0} />
                <Footer/>
            </div>
        );
    }
}

export default withTranslation()(LateralCard);