import React, { Component } from "react";
import "./App.css";
import Crosel from "./Crosel";
import Product from "./ProductsInterface";
import Header from "./Header";
import Navbar from "./Navbar";
import swiper from "./swiper";
import SwiperComponent from "./swiper";

export default class App extends Component {
  constructor(props: Product) {
    super(props);
    this.state = {
      Products: [],
    };
  }
  componentDidMount() {
    try {
      fetch(
        "https://api.rabani.com/api/HomePage/Products?type=TYPE.CATEGORY&query=133,0"
      )
        .then((response) => response.json())
        .then((Data) => {
          this.setState({ products: Data.Data });
          console.log(this.state);
        });
    } catch {}
  }
  render(): React.ReactNode {
    return (
      <>
        <div className='App'>
          <Header />
          <Navbar />
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <Crosel />
            <SwiperComponent />
          </div>
        </div>
      </>
    );
  }
}
