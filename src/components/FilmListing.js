import React, { Component } from "react"
class FilmListing extends Component {
    render() {
        let start = "https://image.tmdb.org/t/p/w780/"
        let d = new Date();
        let year = d.getFullYear();
        const filmObjectEle = this.props.filmObject.map((filmItem) => (
            <div className="film-item">

                <img src={start + filmItem.poster_path} />
                <div className="desc">
                    <h1>{filmItem.title} </h1>
                    <p>{year}</p></div>
            </div>
        ))
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div>{filmObjectEle}</div>
            </div>
        )
    }
}

export default FilmListing
