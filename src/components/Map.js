import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 38.79182417693575,
    longitude: -97.60391235351562,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      let mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
        markers go here
    </ReactMapGL>
  );
}