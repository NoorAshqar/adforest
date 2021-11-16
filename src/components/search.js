import React, { Component } from 'react'
import "./search.css"
export default class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adstoday: "83",
            adsnumber: "267,241",
        }
    }
    render() {
        return (
            <section className="search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h1 className="search-title">Find Whatever Your Want?</h1>
                                <p className="ads-numbers">Search <strong>{this.state.adsnumber}</strong> new ads - {this.state.adstoday} added today</p>
                            </div>
                            <div className="search">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
