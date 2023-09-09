import React from 'react';
import styles from './MapUI.module.css'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {MAPS_API_KEY} from "../../../config/google";
import {grayscaleMapStyles} from "./MapSyles";
import {SVG_MARKER_MAP} from "../../svg/auxiliary/SvgMarkerMap";
// import marker from '../../../media/map/marker.png'
import Scale1Img from '../../../media/scale/IMG_2085.PNG' // building
import Scale2Img from '../../../media/scale/IMG_2087.PNG' // neighborhood
import Scale3Img from '../../../media/scale/IMG_2086.PNG' // city/region


// import axios from 'axios'; // Импортируйте axios

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 0,
    lng: 0,
    name: null,
    locations: null,
};


export default function MapUI({locations, url = null, img = null}) {
    const center = calculateCenter(locations);
    const zoom = locations.length > 0 ? 12 : 2;
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    // const circleMarkerSvgBase64 = img ?? `data:image/svg+xml;base64,${btoa(SEARCH_CASE_BY_ID)}`;
    const {scaleId} = locations;
    console.log(scaleId, locations)

    const defaultMarkerImg = `data:image/svg+xml;base64,${btoa(SVG_MARKER_MAP)}`;

    // const circleMarkerSvgBase64 = IMG_2085;

    function calculateCenter(locations) {
        if (locations.length === 0) {
            return defaultCenter;
        }

        let totalLat = 0;
        let totalLng = 0;

        locations.forEach((location) => {
            totalLat += location.lat;
            totalLng += location.lng;
        });

        const centerLat = totalLat / locations.length;
        const centerLng = totalLng / locations.length;

        return {lat: centerLat, lng: centerLng};
    }

    function getMarkerImg(location) {
        const imgSizes = {
            0: {url: defaultMarkerImg, scaledSize: {width: 30, height: 30}},
            1: {url: Scale1Img, scaledSize: {width: 45, height: 45}},
            2: {url: Scale2Img, scaledSize: {width: 45, height: 45}},
            3: {url: Scale3Img, scaledSize: {width: 45, height: 45}},
        };

        // return imgSizes[location.scaleId] || imgSizes[0];
        return imgSizes[0];
    }


    const handleMarkerMouseOver = (marker) => {
        setSelectedMarker(marker);
    };

    const handleMarkerMouseOut = () => {
        setSelectedMarker(null);
    };
    return (
        <LoadScript googleMapsApiKey={`${MAPS_API_KEY}`}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={{
                    styles: grayscaleMapStyles,
                    disableDefaultUI: true,
                }}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{lat: location.lat, lng: location.lng}}
                        icon={getMarkerImg(location)}
                        shape={{
                            coords: [15, 15, 15],
                            type: 'circle',
                        }}
                        onMouseOver={() => handleMarkerMouseOver(location)}
                        onMouseOut={handleMarkerMouseOut}
                        onClick={() => {
                            if (url) {
                                window.location.href = `/${url}${location.id ?? null}`;
                            }
                        }}
                    >
                        {selectedMarker === location && location.name && location.location && (
                            <InfoWindow options={{disableAutoPan: true}}>
                                <div>
                                    <h3>{location.name}</h3>
                                    <p>{location.location}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
}
