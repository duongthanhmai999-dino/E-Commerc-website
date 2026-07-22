import React from 'react';
import './NewArrival.css'; // Kết nối với file CSS thủ công ở dưới
import ps5Img from '../Public/image/NewArrival1.png';
import womenImg from '../Public/image/NewArrival2.png';
import speakersImg from '../Public/image/NewArrival3.png';
import perfumeImg from '../Public/image/NewArrival4.png';

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      
      {/* 1. CỤM TIÊU ĐỀ THANH ĐỎ QUEN THUỘC */}
      <div className="new-arrival-sub-title">
        <div className="red-rectangle-tag"></div>
        <span className="tag-text-featured">Featured</span>
      </div>
      <h2 className="section-main-heading">New Arrival</h2>

      {/* 2. BỐ CỤC LƯỚI GRID CHỨA CÁC KHỐI SẢN PHẨM NỀN ĐEN */}
      <div className="new-arrival-grid">
        
        {/* KHỐI 1: Ô TO BÊN TRÁI (PLAYSTATION 5) */}
        <div className="arrival-item item-ps5">
          <div className="item-text-content">
            <h3 className="item-title">PlayStation 5</h3>
            <p className="item-desc">Black and White version of the PS5 coming out on sale.</p>
            <a href="/shop" className="shop-now-link">Shop Now</a>
          </div>
          <img src={ps5Img} alt="PS5" className="item-img img-ps5" />
        </div>

        {/* KHỐI 2: Ô DÀI PHÍA TRÊN BÊN PHẢI (WOMEN'S COLLECTIONS) */}
        <div className="arrival-item item-women">
          <div className="item-text-content">
            <h3 className="item-title">Women's Collections</h3>
            <p className="item-desc">Featured woman collections that give you another vibe.</p>
            <a href="/shop" className="shop-now-link">Shop Now</a>
          </div>
          <img src={womenImg} alt="Women Collection" className="item-img img-women" />
        </div>

        {/* KHỐI 3: Ô VUÔNG DƯỚI BÊN TRÁI (SPEAKERS) */}
        <div className="arrival-item item-speakers">
          <div className="item-text-content">
            <h3 className="item-title">Speakers</h3>
            <p className="item-desc">Amazon wireless speakers</p>
            <a href="/shop" className="shop-now-link">Shop Now</a>
          </div>
          <img src={speakersImg} alt="Speakers" className="item-img img-speakers" />
        </div>

        {/* KHỐI 4: Ô VUÔNG DƯỚI BÊN PHẢI (PERFUME) */}
        <div className="arrival-item item-perfume">
          <div className="item-text-content">
            <h3 className="item-title">Perfume</h3>
            <p className="item-desc">GUCCI INTENSE OUD EDP</p>
            <a href="/shop" className="shop-now-link">Shop Now</a>
          </div>
          <img src={perfumeImg} alt="Perfume" className="item-img img-perfume" />
        </div>

      </div>

    </div>
  );
};

export default NewArrival;
