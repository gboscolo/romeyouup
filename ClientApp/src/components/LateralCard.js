import * as React from 'react';
import hamburger from '../assets/images/hamburger.svg';
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
            <div className="lateral-card">
                <img className="hamburger-logo" alt="logo" src={hamburger}></img>
                <h2>Scopri</h2>
                <FiltersTab items={categories} selectedItem={0} onChange={onFilterChange} />
                <CardsCarousel filter={this.state.currentCardsFilter} />
            </div>
        );
    }
}
