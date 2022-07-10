import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className='contaner'>
        <div className='row p-2 bg-white shadow-sm p-3 mb-5 bg-body rounded '>
          <div className='col lg-10 '>
            <ul className='d-flex flex-row align-items-center'>
              <li>
                <a href=''>صفحه اصلی</a>
              </li>
              <li className='category-event'>
                <a href=''>دسته بندی کالا ها</a>
                <ul className='dropdown '>
                  <li className='submenu-list'>
                    <a href=''>پارچه</a>
                    <ul className='d-flex flex-column dropdown-two submenu-two'>
                      <li>
                        <a href=''>جنس پارچه</a>
                      </li>
                      <li>
                        <a href=''>رنگ پارچه</a>
                      </li>
                      <li>
                        <a href=''>طرح پارچه</a>
                      </li>
                      <li>
                        <a href=''>کاربرد پارچه</a>
                      </li>
                    </ul>
                  </li>
                  <li className='submenu-list'>
                    <a href=''>گالری الگو</a>
                  </li>
                  <li className='submenu-list'>
                    <a href=''>کالای خواب</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href=''>نمایندگی ها</a>
              </li>
              <li>
                <a href=''>درباره ما</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <p className='phone'>تلفن پشتیبانی : 09331050281</p>
          </div>
        </div>
      </div>
    );
  }
}
