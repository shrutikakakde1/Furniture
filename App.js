import React from 'react'
import AppNavigator from './src/navigations/Navigator'


export default class App extends React.Component {
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
      (this.state.isFontLoaded === true ? (<AppNavigator/>):null)
      );
  }

}
