import * as React from 'react';
import "./css/LateralCard.css";
import FiltersTab from './FiltersTab';
import CardsCarousel from './CardsCarousel';

export default class LateralCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentCardsFilter: 0 };
    }

    render() {
        let categories = [{ id: 0, label: "Tutti" }, { id: 1, label: "Esperienze" }, { id: 2, label: "Walkingtours" }, { id: 3, label: "Musei" }];
        let onFilterChange = (value) => {
            this.setState({ currentCardsFilter: value });
        };

        return (
            <div className="lateral-card col-lg-4 col-sm-12">
                <div className="col-lg-8 d-none d-lg-block d-xl-block">
                    
                    <h2>Scopri</h2>
                </div>
                <FiltersTab items={categories} selectedItem={0} onChange={onFilterChange} />
                <CardsCarousel filter={this.state.currentCardsFilter} />
            </div>
        );
    }
}
