import FetchFlickr from '../components/FetchFlickr';

jest.mock('fetch-jsonp');

describe('FetchFlickr Component', () => {
    it('should fetch data', async () => {
        expect.assertions(3);
        return FetchFlickr()
            .then(response => {
                response.map(item => {
                    expect(item.url_s.includes(".jpg")).toEqual(true);
                })
            });
    });
});