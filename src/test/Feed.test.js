import React from 'react';
import { mount } from 'enzyme';
import Feed from '../components/Feed';

const props = { "id": "40575384753", "owner": "59464817@N02", "secret": "310af33489", "server": "7828", "farm": 8, "title": "Svassi Maggiori", "ispublic": 1, "isfriend": 0, "isfamily": 0, "description": { "_content": "Podiceps cristatus\nGreat Crested Grebe\nPeschiera del Garda" }, "ownername": "Fausto Deseri", "tags": "greatcrestedgrebe podicepscristatus svassomaggiore corteggiamento peschieradelgarda wildlife nature birds wildanimals nikond500 afsnikkor300mmf28difedii nikontc17eii faustodeseri", "url_s": "https:\/\/live.staticflickr.com\/7828\/40575384753_310af33489_m.jpg", "height_s": "160", "width_s": "240" };

describe('Feed Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Feed data={props} />);
    });

    it('feed has an image', () => {
        expect(wrapper.find(`[src="${props.url_s}"]`)).toHaveLength(1);
    });

    it("feed provides a link to the image", () => {
        expect(wrapper.find(`[href="https://www.flickr.com/photos/${props.owner}/${props.id}/"]`)).toHaveLength(1);
    });

    it("feed shows author name", () => {
        expect(wrapper.text().indexOf(props.ownername)).not.toBe(-1);
    });

    it("feed provides a link to the authors page", () => {
        expect(wrapper.find(`[href="https://www.flickr.com/photos/${props.owner}"]`)).toHaveLength(1);
    });

    it("feed shows a title", () => {
        expect(wrapper.text().indexOf(props.title)).not.toBe(-1);
    });

    it("feed shows a description", () => {
        expect(wrapper.text().indexOf(props.description._content)).not.toBe(-1);
    });
});