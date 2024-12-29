import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const GoogleMapView = () => {
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentCoords({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Fallback to default coordinates if location access is denied or fails
          setCurrentCoords({ lat: 17.525312, lng: 78.483368 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setCurrentCoords({ lat: 17.525312, lng: 78.483368 });
    }
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        {currentCoords ? (
          <GoogleMap  mapContainerStyle={containerStyle} center={currentCoords} zoom={17}>
            {/* Additional map components or markers can go here */}
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
