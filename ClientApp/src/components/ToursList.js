import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import Tour from './Tour';
import { TourSquare } from './TourSquare';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { TextFilter } from 'react-text-filter';
import './css/ToursList.css';

export class ToursList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tours: null, filter: '' };
    }

    render() {
        if (this.state.tours == null) {
            this.loadTours();
            return (<div>{i18next.t("Loading")}...</div>);
        }    

        var filteredTours = this.state.tours ?
            this.state.tours.filter((tour) => { return tour.title.toLowerCase().indexOf(this.state.filter) !== -1; }) :
            this.state.tours.slice(0);

        return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container tours-list">
                    <TextFilter placeholder={i18next.t("ToursFilter")} className={"tours-filter"} onFilter={({ target: { value: filter } }) => this.setState(state => ({ tours: state.tours, filter: filter }))} />
                    {
                        filteredTours.map(tour =>
                            <TourSquare tour={tour} key={tour.id}/>
                        )
                    }
                </div>
                <Footer/>
                </div>
        );
    }

    async loadTours() {
        const response = await fetch('tours/');
        const data = await response.json();
        this.setState({ tours: data });
    }
}

export default withTranslation()(Tour)