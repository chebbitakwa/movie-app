import React, { Component } from 'react';


class Add extends Component {
  constructor(props){
    super(props)
    this.state ={
        rating:"",
        image:"",
        titre:"",
        annee:"",

    }}



    render() {
        const {
            add
        } = this.props
        const {titre, image, annee, rating} = this.state
        return (
          <div className="">
          <input placeholder="Rating" value={this.state.rating} onChange={(e) =>this.setState({
              rating: (e.target.value)})}/><br/>
          <input placeholder="Picture"value={this.state.image} onChange={(e) =>this.setState({
              image: (e.target.value)})}/><br/>
          <input placeholder="Title" value={this.state.titre} onChange={(e) =>this.setState({
              titre: (e.target.value)})}/><br/>
          <input placeholder="First release" value={this.state.annee} onChange={(e) =>this.setState({
              annee: (e.target.value)})}/> <br/>
          
          <button onClick={() => {
                        add({
                            titre,
                            image,
                            rating,
                            annee,
                        })
                       
                    }}>Add</button>
          </div>
        )}}
export default Add ;