import React, {Component} from 'react'
import Filter from './filter'
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {count:4  }
    }
    onStarClick(nextValue) {
        this.setState({rating: nextValue});
    }
    handleChange = (e) =>{
        this.setState({title:e.target.value})
        this.props.searchname(e.target.value)
    }
   
    render() {
        return ( 
            <div className="containerHeader">
                <div className="rowHeader">
                    <div className="col-sm-6 serch">
                        <input className="serchText" type="text" onChange={this.handleChange} />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Header;