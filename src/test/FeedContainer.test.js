import React from 'react';
import { shallow } from 'enzyme';
import FeedContainer from '../components/FeedContainer';

const props = [{ "id": "40575384753", "owner": "59464817@N02", "secret": "310af33489", "server": "7828", "farm": 8, "title": "Svassi Maggiori", "ispublic": 1, "isfriend": 0, "isfamily": 0, "description": { "_content": "Podiceps cristatus\nGreat Crested Grebe\nPeschiera del Garda" }, "ownername": "Fausto Deseri", "tags": "greatcrestedgrebe podicepscristatus svassomaggiore corteggiamento peschieradelgarda wildlife nature birds wildanimals nikond500 afsnikkor300mmf28difedii nikontc17eii faustodeseri", "url_s": "https:\/\/live.staticflickr.com\/7828\/40575384753_310af33489_m.jpg", "height_s": "160", "width_s": "240" }, { "id": "47541388921", "owner": "115045266@N08", "secret": "213f95c299", "server": "7866", "farm": 8, "title": "street g\u00e9om\u00e9trique", "ispublic": 1, "isfriend": 0, "isfamily": 0, "description": { "_content": "" }, "ownername": "Rudy Pilarski", "tags": "structure street nikon nb bw b\u00e2timent building blackandwhite noiretblanc monochrome perspective paris people personne geometry g\u00e9om\u00e9trie g\u00e9om\u00e9tria g\u00e9om\u00e9trique graphique graphic urbain urban urbano urbanisme france francia europe europa jussieux architecture architectura architectural dowtown thebestoffnikon thepassionphotography d7100 design", "url_s": "https:\/\/live.staticflickr.com\/7866\/47541388921_213f95c299_m.jpg", "height_s": "240", "width_s": "160" }, { "id": "46817753384", "owner": "163510631@N05", "secret": "3a8d43ea24", "server": "7926", "farm": 8, "title": "birds , birds , birds", "ispublic": 1, "isfriend": 0, "isfamily": 0, "description": { "_content": "OLYMPUS DIGITAL CAMERA" }, "ownername": "evablanchardcouet", "tags": "nature birds tree outside", "url_s": "https:\/\/live.staticflickr.com\/7926\/46817753384_3a8d43ea24_m.jpg", "height_s": "156", "width_s": "240" }];

describe('FeedContainer Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FeedContainer flickrFeed={props} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <MasonryComponent />', () => {
    expect(wrapper.find('MasonryComponent')).toHaveLength(1);
  });
});