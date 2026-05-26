const BASE_URL = 'http://localhost:8080';

export const api = {
  registerDriver: async (driverData: any) => {
    const response = await fetch(`${BASE_URL}/api/drivers/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(driverData)
    });
    return response.json();
  },

  getAvailableDrivers: async () => {
    const response = await fetch(`${BASE_URL}/api/drivers/available`);
    return response.json();
  },

  getDriversByType: async (vehicleType: string) => {
    const response = await fetch(`${BASE_URL}/api/drivers/type/${vehicleType}`);
    return response.json();
  },

  requestRide: async (rideData: any) => {
    const response = await fetch(`${BASE_URL}/api/rides/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rideData)
    });
    return response.json();
  },

  acceptRide: async (rideId: number, driverId: number) => {
    const response = await fetch(`${BASE_URL}/api/rides/${rideId}/accept/${driverId}`, {
      method: 'POST'
    });
    return response.json();
  },

  completeRide: async (rideId: number) => {
    const response = await fetch(`${BASE_URL}/api/rides/${rideId}/complete`, {
      method: 'POST'
    });
    return response.json();
  },

  getRideStatus: async (rideId: number) => {
    const response = await fetch(`${BASE_URL}/api/rides/${rideId}/status`);
    return response.json();
  }
};