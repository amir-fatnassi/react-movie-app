import React, {Component} from 'react'
import Rating from './Rating'
// import StarRatingComponent from 'react-star-rating-component'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="card">
                    <div className="movie">
                        <div className="image">
                            <img className="img" src={this.props.el.srcImg}/>
                        </div>
                    <div className="details">
                        <h1 className="title">{this.props.el.title}</h1>
                        <div className="stars"><Rating count={this.props.el.rating}  />
                        </div>
                        <div className="tage"><span className="type">{this.props.el.type}</span></div>
                        <div className="info">
                            <p>azerty jgfd yhjd, jnezmjn ezabihifeb dezbgaezy zeygieza iyugieydb
                            azerty jgfd yhjd, jnezmjn ezabihifeb dezbgaezy zeygieza iyugieydb
                            azerty jgfd yhjd, jnezmjn ezabihifeb dezbgaezy zeygieza iyugieydb
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;