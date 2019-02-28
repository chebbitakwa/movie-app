import React, { Component } from 'react';
import Movie from './Movie';
import Add from './add.js';
import Rating from './Rating';
import Header from './Header.js'
import BasicHoc from './LoaderHoc'

class Movies extends Component {
  constructor(props){
    super(props)
    this.state = { film :[
      
      {rating:3,image:"http://fr.web.img3.acsta.net/c_215_290/pictures/16/12/12/13/49/295774.jpg",titre:"Your Name",annee:"2016", evaluation:""},
      {rating:4,image:"http://fr.web.img4.acsta.net/c_215_290/pictures/17/01/25/09/36/363964.jpg",titre:"Lion",annee:"2016", evaluation:""},
      {rating:1,image:"http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/00/02/53/58/affiche2.jpg",titre:"Le Dictateur",annee:"1940", evaluation:""},
      {rating:4,image:"http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/36/23/59/18653460.jpg",titre:"Le Parfum",annee:"2006", evaluation:""}
    ],
  searchmovie:"",
rate:0}
  }
  add=(movie)=>{
        this.setState({
        film: [...this.state.film, movie]
  })
}

transfertdata=x=> this.setState({ searchmovie: x })

 
  render() {
    
    return (
      <div className="">
      <Header data={this.transfertdata}/>
      <Rating
        star={this.state.rate}
        changeProp={x => {
          this.setState({
            rate: x
          });
          console.log(this.state.indice);
        }}/>
      
      

         <div className="container">
         
              {this.state.film
                .filter( movie => movie.titre.toLowerCase().includes(this.state.searchmovie.toLowerCase())&& movie.rating>= this.state.rate)
                .map((el)=> <Movie element={el}/> )}
         </div>
         <Add add={this.add}/>
         

      </div>
       
      
    
    );
  }
}

export default BasicHoc (Movies);
