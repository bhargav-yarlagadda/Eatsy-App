import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { UserLocationContext } from '@/context/userLocationContext';
import userLocIcon from '../../public/user-location.png'

const containerStyle = {
  width: '100%',
  height: '500px',
};

// Custom hook for safe context usage
const useUserLocation = () => {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error('useUserLocation must be used within a UserLocationContextProvider');
  }
  return context;
};

const GoogleMapView = () => {
  const { userLocation, setUserLocation } = useUserLocation(); // Safe usage of context with the custom hook
  const [zoomScale, setZoomScale] = useState(14);
  const [googleMaps, setGoogleMaps] = useState<any>(null); // State to store google.maps once it's loaded

  // Callback function to set googleMaps once the LoadScript component has finished loading the Google Maps API
  const handleMapLoad = () => {
    if (window.google && window.google.maps) {
      setGoogleMaps(window.google.maps); // Store the google.maps object
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Fallback to default coordinates if location access is denied or fails
          setUserLocation({ lat: 17.525312, lng: 78.483368 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setUserLocation({ lat: 17.525312, lng: 78.483368 });
    }
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} onLoad={handleMapLoad}>
        {userLocation && googleMaps ? (
          <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={zoomScale}>
            {/* Additional map components or markers can go here */}
            <MarkerF
              position={userLocation}
              clickable
              icon={{
                url: '/user-location.png',
                scaledSize: new googleMaps.Size(40, 40), // Use googleMaps.Size after it's loaded
              }}
              onClick={() => {
                setZoomScale((prev) => prev + 1);
              }}
            />
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
