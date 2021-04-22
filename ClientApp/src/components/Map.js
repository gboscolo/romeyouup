
import * as React from 'react';

export default class Map extends React.Component {
    mapRef = React.createRef();
    state = {
        map: null,
        positions: this.props.positions 
    };

    componentDidMount() {
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "wSdwwkflq2_itlKHuGjsMCwNUf7Jz-a6eUouiqyxoOM"
        });

        const defaultLayers = platform.createDefaultLayers();
        let center = { lng: 12.49, lat: 41.9 }
        if (this.state.positions) {
            var parsedPositions = this.state.positions.map((pos) => { return { lat: pos.split(";")[0], lng: pos.split(";")[1] } });
            if (parsedPositions.length == 1) {
                center = parsedPositions[0];
            }
            else {
                let minLat = Math.min.apply(Math, parsedPositions.map((p) => parseFloat(p.lat)));
                let maxLat = Math.max.apply(Math, parsedPositions.map((p) => parseFloat(p.lat)));
                let minLong = Math.min.apply(Math, parsedPositions.map((p) => parseFloat(p.lng)));
                let maxLong = Math.max.apply(Math, parsedPositions.map((p) => parseFloat(p.lng)));
                center = { lat: (minLat + maxLat) / 2, lng: (minLong + maxLong)/2 }
            }
        }

        const map = new H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                zoom: 15,
                center: center
            }
        );

        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        // This variable is unused and is present for explanatory purposes
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components to allow the user to interact with them
        // This variable is unused
        const ui = H.ui.UI.createDefault(map, defaultLayers);

        if (this.state.positions) {
            if (this.state.positions.length == 1) {

            }
            else {
                var lineString = new H.geo.LineString();
                var parsedPositions = this.state.positions.map((pos) => { return { lat: pos.split(";")[0], lng: pos.split(";")[1] } });

                var bubble = new H.ui.InfoBubble(parsedPositions[0], {
                    content: '<b>Hello World!</b>'
                });

                parsedPositions.forEach((position) => {
                    lineString.pushPoint({ lat: position.lat, lng: position.lng });
                });
                map.addObject(new H.map.Polyline(
                    lineString, { style: { lineWidth: 5 } }
                ));
            }
        }

        

        // Add info bubble to the UI:
        ui.addBubble(bubble);

        this.setState({ map });
    }

    componentWillUnmount() {
        this.state.map.dispose();
    }

    render() {
        return <div ref={this.mapRef} style={{ height: "500px" }} className="map" />;
    }
}