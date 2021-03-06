import {convertObjectIntoURLString} from '../util';

describe('Convert object key/value into url string', () => {
  it('should response string vaule', async () => {
    let data = {
      limit: 20,
      offset: 1,
    };

    const urlString = await convertObjectIntoURLString(data);
    expect(typeof urlString).toBe('string');
  });
});
