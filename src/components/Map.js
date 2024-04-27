import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

const API_KEY = 'pk.eyJ1IjoiYWJoaW5hbmQycCIsImEiOiJjbHZocWUwamUxNGlkMm1uemZwdW1oMTVuIn0.ySYTQ_g9zt4F9XOeXnRKhg';

const Map = ({ lat, lon }) => {
    const [viewport, setViewport] = useState({
        latitude: lat || 0, // Default to 0 if lat is undefined
        longitude: lon || 0, // Default to 0 if lon is undefined
        zoom: 14,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%'
    });

    useEffect(() => {
        // Update viewport when lat or lon props change
        setViewport(prevViewport => ({
            ...prevViewport,
            latitude: lat || 0,
            longitude: lon || 0
        }));
    }, [lat, lon]);

    return (
        <div className='map'>
            <ReactMapGL
                mapboxApiAccessToken={API_KEY}
                {...viewport}
                onViewportChange={viewport => setViewport(viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11">
                <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                    <div className='mark'>
                        <RiUserLocationFill size="25px" color='blue' />
                    </div>
                </Marker>
            </ReactMapGL>
        </div>
    );
};

export default Map;
