import * as React from 'react';
import "./css/LateralCard.css";
import FiltersTab from './FiltersTab';
import CardsCarousel from './CardsCarousel';
import ToursCarousel from './ToursCarousel';

export default class LateralCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentToursFilter: 0 };
    }

    render() {
        let categories = [{ id: 0, label: "Tutti" }, { id: 1, label: "Esperienze" }, { id: 2, label: "Walkingtours" }, { id: 3, label: "Musei" }];
        let onFilterChange = (value) => {
            this.setState({ currentCardsFilter: value });
        };

        return (
            <div className="lateral-card col-lg-4 col-sm-12">
                <div className="d-none d-lg-block d-xl-block">                    
                    <h2>Scopri cosa abbiamo in mente per te</h2>
                </div>
                <FiltersTab items={categories} selectedItem={0} onChange={onFilterChange} />
                <ToursCarousel filter={this.state.currentToursFilter} />
                <h2>O leggi uno dei nostri post</h2>
                <CardsCarousel filter={0} />
            </div>
        );
    }
}
