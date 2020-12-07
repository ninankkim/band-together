import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import HomeIcon from '@material-ui/icons/Home';
import FoodIcon from '@material-ui/icons/Restaurant'
import DonationCenter from '@material-ui/icons/ShoppingCart';
import CustomCards from './CustomCards';

export default function Map(props) {
  const { child, gender, ident, shelters, foodPantries } = props;
  const [selectedShelters, setSelectedShelters] = useState(null);

  const [selectedFoodPantries, setSelectedFoodPantries] = useState(null)

  const [donationCenters, setDonationCenters] = useState([]);
  const [selectedDonationCenters, setSelectedDonationCenters] = useState(null);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '70vh',
    latitude: 29.7589382,
    longitude: -95.3676974,
    zoom: 8,
  });

  // componentDidMount





  useEffect(() => {
    fetch('/api/v1/donationcenter')
      .then(res => res.json())
      .then(data => {
        setDonationCenters(data)
      })
  }, []);

  return (
    <div>

      <ReactMapGL
        {...viewport}
        style={{width:'100%', margin: '0 auto'}}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/bargavi-dev/cki67zptc3d5o19try3pjc9fh'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {donationCenters.map(donationCenter => {
          return (
            <Marker key={donationCenter.id}
              latitude={donationCenter.latitude}
              longitude={donationCenter.longitude}
            >
              <DonationCenter
                onClick={e => {
                  e.preventDefault();
                  setSelectedDonationCenters(donationCenter)
                }}
              ></DonationCenter> </Marker>
          )
        })}


        {foodPantries.map(foodPantry => {
          return (
            <Marker key={foodPantry.id}
            latitude={foodPantry.latitude}
            longitude={foodPantry.longitude}
            >
              <FoodIcon
                onClick={e => {
                  e.preventDefault();
                  setSelectedFoodPantries(foodPantry)
                }}
                ></FoodIcon>
            </Marker>
          )
        })}

        {shelters.map(shelter => {
          return (
            <Marker
            key={shelter.id}
            latitude={shelter.latitude}
            longitude={shelter.longitude}
            >
              <HomeIcon
                onClick={e => {
                  e.preventDefault();
                  setSelectedShelters(shelter);
                }}
                ></HomeIcon>
            </Marker>
          );
          //filter through data with variable
        })}
                                    {selectedFoodPantries ? (
                                      <Popup
                                      latitude={selectedFoodPantries.latitude}
                                      longitude={selectedFoodPantries.longitude}
                                      onClose={() => {
                                        setSelectedFoodPantries(null);
                                      }}
                                      >
                                        <div>
                                          <h2>{selectedFoodPantries.name}</h2>
                                          <h2>{selectedFoodPantries.address}</h2>
                                          <h2>{selectedFoodPantries.phone_number}</h2>
                                          <h2>{selectedFoodPantries.hours}</h2>
                                          <h2>{selectedFoodPantries.church_affiliated}</h2>
                                        </div>
                                      </Popup>
                                    ) : null}
              {selectedDonationCenters ? (
                <Popup
                  latitude={selectedDonationCenters.latitude}
                  longitude={selectedDonationCenters.longitude}
                  onClose={() => {
                    setSelectedDonationCenters(null);
                  }}
                >
                  <div>
                    <h2>{selectedDonationCenters.name}</h2>
                    <h2>{selectedDonationCenters.address}</h2>
                    <h2>{selectedDonationCenters.phone_number}</h2>
                    <h2>{selectedDonationCenters.hours}</h2>
                    <h2>{selectedDonationCenters.category}</h2>
                  </div>
                </Popup>
              ) : null}
        {selectedShelters ? (
          <Popup
          latitude={selectedShelters.latitude}
          longitude={selectedShelters.longitude}
            onClose={() => {
              setSelectedShelters(null);
            }}
          >
            <div>
              <h2>{selectedShelters.name}</h2>
              <h2>{selectedShelters.address}</h2>
              <h2>{selectedShelters.phone_number}</h2>
              <h2>{selectedShelters.hours}</h2>
              <h2>{selectedShelters.lgbtFriendly}</h2>
              <h2>{selectedShelters.women_and_children}</h2>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
