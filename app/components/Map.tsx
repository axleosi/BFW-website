'use client'
import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Map.module.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';




const Map = () => {
  const [isClient, setIsClient] = useState(false);  // State to track if we're on the client-side

  useEffect(() => {
    // Set isClient to true only on the client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading map...</div>;  // Optionally, display a loading state while waiting for client-side render
  }
  const customIcon=new Icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconSize:[38,38]
  })
  return (
   <div className={styles.mapCon}>
    <MapContainer center={[6.53301,3.39156]} zoom={13} style={{height:'100%', width:'100%'}}>
      <TileLayer
       url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[6.53301,3.39156]} icon={customIcon}></Marker>
    </MapContainer>
   </div>
  )
}

export default Map