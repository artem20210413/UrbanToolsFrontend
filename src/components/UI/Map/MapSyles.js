export const grayscaleMapStyles = [
    {
        elementType: "geometry",
        stylers: [
            {
                saturation: -100,
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: 0,
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "Universitätsspital",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "water",
        stylers: [
            {
                // lightness: -60,
                lightness: 0,
            },
        ],
    },
    {
        featureType: "poi",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
];

