import React from 'react';
import Masonry from 'react-masonry-component';
import Feed from './Feed';

export default function FeedContainer(props) {

  return (
    <div className="container">
      <Masonry>
        {
          props.flickrFeed.map((feed, index) => {
            return <Feed key={index} data={feed} />
          })
        }
      </Masonry>
    </div>
  )
}