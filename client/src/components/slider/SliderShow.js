import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderShow extends Component {
  render() {
    return (
      <div className="wrapper box">
        <div className="single-box">
          <img alt="" src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Slide_3.jpg" />
        </div>
        <div className="single-box">
          <img alt="" src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Slide_1.jpg" />
        </div>
        <div className="single-box">
          <img alt="" src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Slide_3.jpg" />
        </div>
        <div className="single-box">
          <img alt="" src="https://mcdn.nhanh.vn/store/7136/bn/Tha__ng_5_Slide_2.jpg" />
        </div>
      </div>

    );
  }
}