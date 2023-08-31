import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './MapUI.module.css'
// import {GoogleMap, LoadScript, Marker} from '@googlemaps/react-wrapper';
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {MAPS_API_KEY} from "../../../config/google";

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

export default function MapUI({locations, url = null}) {
    const center = calculateCenter(locations);
    const zoom = locations.length > 0 ? 12 : 2;
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    // const handleMarkerClick = (marker) => {
    //     setSelectedMarker(marker);
    // };

    // const handleInfoWindowClose = () => {
    //     setSelectedMarker(null);
    // };
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
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{lat: location.lat, lng: location.lng}}
                        // onClick={() => handleMarkerClick(location)}
                        onMouseOver={() => handleMarkerMouseOver(location)}
                        onMouseOut={handleMarkerMouseOut}
                        onClick={() => {
                            console.log(url, location)
                            if (url) {
                                window.location.href = `/${url}${location.id}`;
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


// import styles from './Search.module.css'
// import SvgMagnifyingGlass from "../../svg/auxiliary/SvgMagnifyingGlass";
// import {useParams} from "react-router-dom";
//
// function Search() {
//
//     const {search} = useParams();
//     // const [search, setSearch] = useState('');
//
//     // function handleInputChange(event) {
//     //     setSearch(event.target.value);
//     // }
//
//     return (
//         <div className={`${styles.item} font-text-small`}>
//             <input type="text" placeholder="search" value={search ?? ''}/>
//             <button type="submit">
//                 <SvgMagnifyingGlass/>
//             </button>
//         </div>
//     );
// }
//
// export default Search