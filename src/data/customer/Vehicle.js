import axios from 'axios';
import endpoints from '../Endpoint';
import camelize from 'camelize';

/**
 * Get Vehicles
 * @param {string} token
 * @return {object} Promise resolve/reject
 */
export const getVehicleTypesAsync = async (token) => {
  try {
    const vehicles = await axios({
      method: 'get',
      url: `${endpoints.VEHICLES}/types`,
      headers: {Authorization: `bearer ${token}`},
    });

    return camelize(vehicles.data);
  } catch (e) {
    return Promise.reject({
      statusCode: e.response.status,
      statusText: e.response.statusText,
    });
  }
};
