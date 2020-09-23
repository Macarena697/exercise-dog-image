import React from 'react';

class HandleFetch extends React.Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.state = {
      dog: undefined,
    } 
  }

  async fetchDog() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    let requesObject = await requestReturn.json();
    requesObject = requesObject.message;
    this.setState({
      dog: requesObject,
    })
  }

  componentDidMount(){
    this.fetchDog();
  }

  shouldComponentUpdate(_, nextState){
    if (nextState.dog.includes('terrier')) return false;
    return true;
  }

  render() {
    const { dog } = this.state;
    const loadingElemnet = <span>Loading...</span>
    return(
      <div>
        {dog ? (<img src={dog} alt="dog" />) : loadingElemnet}
        <button onClick={this.fetchDog}>NEXT</button>    
      </div>
    );
  }
}

export default HandleFetch;
