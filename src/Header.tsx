import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className='row d-flex  flex-row align-items-center justify-content-between  bg-white'>
        <div className='col-lg-2'>
          <img src='../assets/logo.svg' alt='' className='logo-brand' />
        </div>
        <div className='col-lg-6'>
          {/* <img src='../assets/search.svg' className='icon-search' /> */}
          <input
            type='text'
            className=' p-2 form-control'
            placeholder='جست و جوی کالا'
          />
        </div>
        <div className='col button'>
          <button className=' btn  btn-info'>حساب کاربری</button>
          <button className='btn  btn-info '>سبد خرید</button>
        </div>
      </div>
      // <nav className=' bg-white '>
      //   <div className=' d-flex  flex-row align-items-center justify-content-around'>
      //     <div className='col-lg-2'>
      //       <img src='../assets/logo.svg' alt='' className='logo-brand' />
      //     </div>
      //     <div className='col-lg-4 form-group'>
      //       <img src='../assets/search.svg' className='icon-search' />
      //       <input
      //         type='text'
      //         className=' p-2 form-control'
      //         placeholder='جست و جوی کالا'
      //       />
      //     </div>
      //     <div className='d-flex'>
      //       <button className=' btn  btn-info'>حساب کاربری</button>
      //       <button className='btn  btn-info '>سبد خرید</button>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
