import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ArticleText from './components/ArticleText'
import ImageSection from './components/ImageSection'

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
// console.log(NEWS_API_KEY)
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      topic: "bitcoin",
      data:{},
      input:''
    }
    this.handleForSubmit = this.handleForSubmit.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(evnt){
    this.setState({
      input: evnt.target.value
    })
  }


  handleForSubmit(event){
    // event.preventdefault()

    const url = `https://newsapi.org/v2/everything?q=${this.state.topic}&apiKey=${NEWS_API_KEY}`
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      this.setState({
         data: data.articles
      })
     
        // console.log(data.articles)
    })
  }

componentDidMount() {
  this.handleForSubmit()
}

  render() {

    return (
      <div className="App">
      <Header/>
      <ArticleText articles={this.state.data} />
      <ImageSection images={this.state.data} />
      </div>
    );
  }
}

export default App;
