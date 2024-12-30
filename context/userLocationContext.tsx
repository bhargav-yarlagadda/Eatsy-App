'use client';

import React, { createContext, useState } from 'react';

// Define the shape of the userLocation object
interface UserLocation {
  lat: number;
  lng: number;
}

// Define the shape of the context
interface ContextType {
  userLocation: UserLocation;
  setUserLocation: React.Dispatch<React.SetStateAction<UserLocation>>;
}

// Create the context with a default value of `undefined`
export const UserLocationContext = createContext<ContextType | undefined>(undefined);

// Create a provider component
export const UserLocationContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state with default latitude and longitude
  const [userLocation, setUserLocation] = useState<UserLocation>({
     lat: 17.525312, lng: 78.483368 
  });

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
