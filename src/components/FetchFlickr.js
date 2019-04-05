import fetchJsonp from "fetch-jsonp";

const FetchFlickr = (page, limit) =>
    fetchJsonp(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=16eac98aab081f11c0e4be094bda8c10&per_page=${limit}&page=${page}&format=json&tags=animals,nature,weather,attractions,places,design,sealife,football,sports&extras=description,url_s,tags,owner_name&safe_search=1`,
        {
            jsonpCallbackFunction: "jsonFlickrApi"
        })
        .then(response => response.json());

export default FetchFlickr;