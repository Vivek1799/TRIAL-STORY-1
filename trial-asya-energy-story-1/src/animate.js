function animateRoutePoint(map, origin, destination) {
    const route = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [origin, destination]
                }
            }
        ]
    };

    const point = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': origin
                }
            }
        ]
    };

    const lineDistance = turf.length(route.features[0]);
    const arc = [];
    const steps = 500;

    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        const segment = turf.along(route.features[0], i);
        arc.push(segment.geometry.coordinates);
    }

    route.features[0].geometry.coordinates = arc;
    let counter = 0;

    map.addSource('route', {
        'type': 'geojson',
        'data': route
    });

    map.addSource('point', {
        'type': 'geojson',
        'data': point
    });

    map.addLayer({
        'id': 'route',
        'source': 'route',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15', // Use an appropriate icon from the Mapbox sprite
            'icon-size': 1.5,
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-pitch-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-anchor': 'center'
        }
    });

    function animate() {
        const start =
            route.features[0].geometry.coordinates[
                counter >= steps ? counter - 1 : counter
            ];
        const end =
            route.features[0].geometry.coordinates[
                counter >= steps ? counter : counter + 1
            ];

        if (!start || !end) return;

        point.features[0].geometry.coordinates =
            route.features[0].geometry.coordinates[counter];
        point.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        map.getSource('point').setData(point);

        if (counter < steps) {
            requestAnimationFrame(animate);
        }

        counter = counter + 1;
    }

    animate();

    // Return a function to restart the animation
    return function() {
        counter = 0;
        point.features[0].geometry.coordinates = origin;
        map.getSource('point').setData(point);
        animate();
    };
}