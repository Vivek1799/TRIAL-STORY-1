var config = {
    style: 'mapbox://styles/vivekpatil17/clxw2f159001i01qhday6amzf',
    accessToken: 'pk.eyJ1Ijoidml2ZWtwYXRpbDE3IiwiYSI6ImNseHV4bzJoMzFycXgybG9tN3ptZXd1d2QifQ.wbdQPBUeYDHlbwnmgHHI9g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: false, // Set true for enabling 3D maps.
    auto: false,
    title: 'Journey of Asia Energies',
    subtitle: 'From Qatar to India and Beyond',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Departure from Qatar',
            description: 'On January 1, 2024, Asia Energies departs from the port of Qatar, embarking on its journey to India.',
            location: {
                center: [63.70495, 22.84669],
                zoom: 3.93,
                pitch: 20.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'Arrival at Mumbai, India',
            description: 'Asia Energies arrives at the bustling port of Mumbai, India, on February 1, 2024.',
            location: {
                center: [68.95069, 22.30047],
                zoom: 5.51,
                pitch: 20.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Return to Qatar',
            description: 'After unloading its cargo, Asia Energies makes its way back to Qatar, reaching on March 1, 2024.',
            location: {
                center: [52.12367, 24.93653],
                zoom: 5.15,
                pitch: 23.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'fully',
            hidden: false,
            title: 'Docking at Oman',
            description: 'In April 2024, Asia Energies docks at the port of Oman for maintenance and refueling.',
            location: {
                center: [56.72450, 21.71278],
                zoom: 5.43,
                pitch: 8.00,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                },
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 1
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                },
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 0
                          },
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'fully',
            hidden: false,
            title: 'First Ship Through the Canal This Year',
            description: 'This ship is the first to travel through the canal this year.',
            location: {
                center: [45.84067, 23.90089],
                zoom: 3.78,
                pitch: 8.00,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 1
                },
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 0.3
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 1
                },
                {
                    layer: 'data3-bxiizk', // Your layer ID from Mapbox Studio
                    opacity: 0.3
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0.3
                }
            ],
            image: '<your-image-url-here>' // Add your image URL here
        },
        {
            id: 'chapter-6',
            alignment: 'center',
            hidden: false,
            title: 'Final Destination',
            description: 'Asia Energies reaches its final destination, completing its journey.',
            location: {
                center: [32.25545, 33.18050],
zoom: 6.23,
pitch: 2.00,
bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                },
                {
                    layer: 'postsuez-ct75m7', // New layer ID
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-1ellv2', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'qatartooman-5tsvd1', // Your layer ID from Mapbox Studio
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw', // New layer ID
                    opacity: 0
                },
                {
                    layer: 'postsuez-ct75m7', // New layer ID
                    opacity: 1
                }
            ]
        }
        
    ]
};