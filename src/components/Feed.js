import React from 'react';

export default function Feed(props) {

    const description = props.data.description._content.replace(/<\/?[^>]+(>|$)/g, '');
    const calculatePaddingBottom = (props.data.height_s / props.data.width_s) * 100 + '%';

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto my-2 pl-1">
            <div className="card">
                <div className="img-container" style={{ paddingBottom: calculatePaddingBottom }}>
                    <img src={props.data.url_s} className="img-fluid w-100" alt="feed" />
                </div>
                <div className="mx-1">
                    <div className="mt-1">
                        <a href={`https://www.flickr.com/photos/${props.data.owner}/${props.data.id}/`} target="_blank" rel="noreferrer noopener" className="font-weight-bold">{props.data.title}</a>
                    </div>
                    <div className="mt-1">
                        by <a href={`https://www.flickr.com/photos/${props.data.owner}`} target="_blank" rel="noreferrer noopener" className="font-weight-bold">{props.data.ownername}</a>
                    </div>
                    {
                        description.length > 0 ?
                            <div className="mt-1" dangerouslySetInnerHTML={{ __html: `Description: ${description}` }} /> :
                            false
                    }
                    {
                        props.data.tags.length > 0 ?
                            <div className="tags mt-1">
                                Tags: {props.data.tags}
                            </div> :
                            false
                    }
                </div>
            </div>
        </div>
    )
}
