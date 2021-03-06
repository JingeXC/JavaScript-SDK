import axios from 'axios';
import endpoints from '../Endpoint';
import camelize from 'camelize';
import FormData from 'form-data';
import {apiResponseErrorHandler} from '../../utility/Util';

export const fileUploadAsync = async (fileObject, token) => {
  try {
    let form = new FormData();
    form.append('grouping_spreadsheet', fileObject);

    let response = await axios(endpoints.API_V3.BATCH_FILE_UPLOAD, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: form,
    });

    return camelize(response.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};
