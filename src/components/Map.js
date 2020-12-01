import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as shelterData from "seeders"

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
      mapStyle="mapbox://styles/bargavi-dev/cki67zptc3d5o19try3pjc9fh"
      onViewportChange={ viewport => {
          setViewport(viewport);
      }}
    >
        markers go here
    </ReactMapGL>
  );
}