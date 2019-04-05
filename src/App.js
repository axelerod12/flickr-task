import React, { Component } from 'react';
import FetchFlickr from './components/FetchFlickr';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import InfiniteScroll from 'react-infinite-scroller';
import FeedContainer from './components/FeedContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hasMore: true,
      page: 1,
      limit: 10,
      flickrFeed: [],
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  loadMore() {
    FetchFlickr(this.state.page, this.state.limit)
      .then(response => {
        if (response.stat === "fail") {
          console.log(response.message);
        }
        else {
          this.setState({
            loading: false,
            page: this.state.page + 1,
            flickrFeed: [...this.state.flickrFeed, ...response.photos.photo]
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ?
          <LoadingSpinner className="spinner" /> :
          <div>
            <Header search={this.state.search} onChange={this.handleChange} />
            <InfiniteScroll pageStart={0} hasMore={this.state.hasMore} loadMore={this.loadMore} threshold={500}>
              <FeedContainer flickrFeed={
                this.state.flickrFeed.filter(feed => {
                  return feed.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                })
              }
              />
            </InfiniteScroll>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App;