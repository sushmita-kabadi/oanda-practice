import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './Utils/ProductData.js'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails'
import Topbar from './Topbar/Topbar';
import React , { Component } from 'react';
import { render } from '@testing-library/react';

 class App extends Component{

  state = {
    productData:ProductData,
    // currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    // showHeartBeatSection:false,
    currentPreviewImagePos:0,
    currentSelectedFeature:0,
  }

  onColorOptionClick = (pos) =>{
    // alert(pos)
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
    this.setState({currentPreviewImagePos:pos})
  }

  onFeatureItemClick = (pos) =>{
    // console.log(pos)
    // alert(pos)
    let updatedState = false;
    if(pos == 1){
      updatedState = true;
    }
    this.setState({currentSelectedFeature:pos})
  }

  render(){
    return (
      <div className="App">
      
        <Topbar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
           <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} onFeatureItemClick = {this.onFeatureItemClick} currentPreviewImagePos={this.state.currentPreviewImagePos} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
