import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import HomeIcon from '@material-ui/icons/Home';




export default function Map() {
    const [ shelters, setShelters ] = useState([])


  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 38.79182417693575,
    longitude: -97.60391235351562,
    zoom: 8
  });


  // componentDidMount
  useEffect(() => {
    fetch('/api/v1/shelter')
      .then(res => res.json())
      .then(data => {
        setShelters(data);
      })
  }, [])



  return (
    <ReactMapGL
      {...viewport}
      let mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/bargavi-dev/cki67zptc3d5o19try3pjc9fh"
      onViewportChange={ viewport => {
          setViewport(viewport);
      }}
    >
        {shelters.map((shelter) => {
          return <Marker key={shelter.id} latitude={shelter.latitude} longitude={shelter.longitude}>
            <HomeIcon />
          </Marker>

        })}
    </ReactMapGL>
  );
}