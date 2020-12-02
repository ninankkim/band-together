import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';

export default function CustomCard({ types }) {
  

    const [shelters, setShelters] = useState([]);
    const [foodPantries, setFoodPantries] = useState([]);
    const [donationCenters, setDonationCenters] = useState([]);
    
    //fetch data for each types of data from the API, put them into the correspondant pieces of state
    useEffect(() => {
        fetch('/api/v1/shelter')
          .then(res => res.json())
          .then(data => {
            setShelters(data);
          });
      }, []);
    
      useEffect(() => {
        fetch('/api/v1/foodpantry')
        .then(res => res.json())
        .then(data => {
          setFoodPantries(data)
        }); 
      }, []);
    
      useEffect(() => {
        fetch('/api/v1/donationcenter')
        .then(res => res.json())
        .then(data => {
          setDonationCenters(data)
        })
      }, []);

    if ( types === 'shelters' || types === 'foodPantries' || types === 'donationCenters') {
      let cards = [];   
           if (types === 'shelters') {
            
            const sheltersJSX = shelters.map(shelter => {
              return (  
              <Card key={shelter.id}>
                  <CardContent>
                        <Typography className ='shelterCard' color="textPrimary">{shelter.name}</Typography>
                        <Typography color="textSecondary">{shelter.hours} at {shelter.address}</Typography>
                    </CardContent>
                </Card>
              )
            })
            cards = cards.concat(sheltersJSX);
          }
          if(types === 'foodPantries') {
            const foodPantriesJSX = foodPantries.map(foodpantry => {
              return (
                <Card key = {foodpantry.id}>
                  <CardContent>
                    <Typography className='pantryCard' color="textPrimary">{foodpantry.name}</Typography>
                    <Typography color ='textSecondary'>{foodpantry.hours} at {foodpantry.address}</Typography>
                  </CardContent>
                </Card>
              )
            })
            cards = cards.concat(foodPantriesJSX); 
          }
          if(types === 'donationCenters') {
            const donationCentersJSX = donationCenters.map(donationcenter => {
              return (
                <Card key = {donationcenter.id}>
                  <CardContent>
                    <Typography className = 'donationCard' color='textPrimary'>{donationcenter.name}</Typography>
                    <Typography>{donationcenter.category} is available from {donationcenter.hours} at {donationcenter.address}</Typography>
                  </CardContent>
                </Card>
              )
            })
            cards = cards.concat(donationCentersJSX)
          }
          return cards
        }

      else {
            console.error('PLEASE GIVE THE CARD AN INPUT OF SHELTERS, FOODPANTRIES, OR DONATIONCENTERS (lowercase)')
            return null; 
               }
}
