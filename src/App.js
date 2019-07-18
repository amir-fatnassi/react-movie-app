import React, {Component} from 'react';
import Header from './component/header'
import List from './component/list'
import RatingFilter from './component/filter'
import './App.css'

const array=[
  { 
      srcImg: 'https://medias.liberation.fr/photo/379782-affiche-du-film-underworld.jpg?modified_at=1328277814&width=975',
      title: 'underworld',
      date: '2019',
      rating: 0,
      type:'action'
  },
  { 
      srcImg: 'https://i2.cdscdn.com/pdt2/5/1/9/1/700x700/auc2009252737519/rw/53206_1-162-dimensions-21-x-30-cm-affiche-du.jpg',
      title: 'uamir',
      date: '2019',
      rating: 2,
      type:'romantic'
  },
  { 
      srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgceUXct0osEWxyUU9C0NP_5H5GLfo1CvAOh94Cugc-PzeFLte',
      title: 'zied',
      date: '2019',
      rating: 5,
      type:'action'
  },
  { 
      srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqEyHI-zcIpo8Y6xFvbas0TKPQoBKcGt35YiVa6xvCVb27LZ5',
      title: 'amir',
      date: '2019',
      rating: 3,
      type:'romantic'
  },
  { 
      srcImg: 'https://medias.liberation.fr/photo/379782-affiche-du-film-underworld.jpg?modified_at=1328277814&width=975',
      title: 'underworld',
      date: '2019',
      rating: 5,
      type:'action'
  },
  { 
      srcImg: 'https://medias.liberation.fr/photo/379782-affiche-du-film-underworld.jpg?modified_at=1328277814&width=975',
      title: 'underworld',
      date: '2019',
      rating: 4,
      type:'action'
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie:array,
      starFilter:2
    }
}
  search = (x) =>{
    let filt = array.filter((el)=>{return el.title.toLocaleLowerCase().indexOf(x)>-1})
    this.setState({movie:filt})
  }
  getVisibleMovies() {
    return this.state.movie.filter(el => el.rating >= this.state.starFilter)
  }
  addMovie = (newMovie) =>{
    this.setState({
      movie:this.state.movie.concat(newMovie)
    })
  }
  render() {
  return (
    <div className="App">
      <Header searchname={(pop)=>{this.search(pop)}} />
      <RatingFilter 
      count={this.state.starFilter}
      onChange={(newRating) => {console.log(this.state.starFilter)
        this.setState({
        starFilter: newRating
        })
      }}
      />
      <List 
      addM={(newfilm)=>{this.addMovie(newfilm)}} 
      movie={
        this.getVisibleMovies()}
      
      // tab={this.state.newArray}
      />
    </div>
  );
}
}

export default App;
