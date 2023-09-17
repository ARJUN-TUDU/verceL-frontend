import React from 'react'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState } from 'react'
  const center = { lat: 48.8584, lng: 2.2945 }

const Map = () => {

    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  
  if(!isLoaded){
    return <div>null</div>
  }


  return (

    <div>

        <GoogleMap
        
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        
        >




        </GoogleMap>
        
         
        
    </div>

  )

}

export default Map