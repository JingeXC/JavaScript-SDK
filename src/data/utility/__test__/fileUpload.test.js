import { fileUploadAsync } from '../FileUpload';
import { getTokenAsync } from '../../account/Auth';
import CONFIG from './Config';
import { snakeCaseDecorator } from '../../decorator/CoreDecorators';

// test('Test for file uploading', async () => {
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     const result = getTokenAsync(CONFIG.email, CONFIG.password, CONFIG.clientId, CONFIG.clientSecret);
//     const token = await result;
//     const response = await fileUploadAsync({grouping_spreadsheet: 12}, token.accessToken)
//
//     expect('groupingBatchId' in response).toBe(true);
// })

test('Test for file uploading error', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    const result = getTokenAsync(CONFIG.email, CONFIG.password, CONFIG.clientId, CONFIG.clientSecret);
    const token = await result;
    const response = await fileUploadAsync({grouping_spreadsheet: 12}, token.accessToken)

    expect('error' in response).toBe(true);
})
