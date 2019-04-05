import React, { Component } from 'react';

export default class Header extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.props.onChange([name], value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <header className="navbar bg-dark">
                <div className="container">
                    <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit}>
                        <input type="search" name="search" className="form-control mr-sm-2" placeholder="Search by title..." onChange={this.handleChange} value={this.props.search} />
                        <button className="btn btn-primary my-2 my-sm-0">Search</button>
                    </form>
                </div>
            </header>
        )
    }
}
