import React from 'react';
import styles from './MapUI.module.css'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {MAPS_API_KEY} from "../../../config/google";
import {grayscaleMapStyles} from "./MapSyles";
import {SEARCH_CASE_BY_ID} from "../../svg/auxiliary/SvgMarkerMap";
// import marker from '../../../media/map/marker.png'


// import axios from 'axios'; // Импортируйте axios

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 0, // Значения по умолчанию, если locations пуст
    lng: 0,
    name: null,
    locations: null,
};


export default function MapUI({locations, url = null, img = null}) {
    const center = calculateCenter(locations);
    // const [center, setCenter] = React.useState(defaultCenter);
    const zoom = locations.length > 0 ? 12 : 2;
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    const circleMarkerSvgBase64 = img ?? `data:image/svg+xml;base64,${btoa(SEARCH_CASE_BY_ID)}`;

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
                        icon={{
                            url: circleMarkerSvgBase64, // Передаем базов64-кодированную строку
                            // scaledSize: new window.google.maps.Size(30, 30),
                            scaledSize: {width: 30, height: 30},
                        }}
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
