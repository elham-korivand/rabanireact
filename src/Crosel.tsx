import React, { Component } from "react";
import "./Crosel.css";

export default class Crosel extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-9'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-bs-ride='true'>
            <div className='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0'
                className='active'
                aria-current='true'
                aria-label='Slide 1'></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'></button>
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src='../assets/slider1.jpeg'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='../assets/slider2.jpeg'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='../assets/slider3.jpeg'
                  className='d-block w-100'
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'>
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'>
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className='col-lg-3 d-flex flex-column'>
          <img src='../assets/img-1.jpeg' className='image' />
          <img src='../assets/img-2.jpeg' />
        </div>
      </div>
    );
  }
}
