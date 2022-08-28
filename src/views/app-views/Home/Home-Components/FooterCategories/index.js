import React from "react";
import "./FooterCategories.scss";

const FooterCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mt-20 text-center">
      <div className="col-span-1">
        <span>Shoes</span>
        <ul className="footer-categories">
          <li>Sneakers and Shoes</li>
          <li>Football Boots</li>
          <li>Running Shoes</li>
          <li>Netball Sneakers</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Clothing</span>
        <ul className="footer-categories">
          <li>All Clothing</li>
          <li>Tops</li>
          <li>Trousers and Leggings</li>
          <li>Tracksuits</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Kids'</span>
        <ul className="footer-categories">
          <li>Kids' Sneakers</li>
          <li>Kids' Backpacks</li>
          <li>Kids' Football Boots</li>
          <li>Kids' Running Shoes</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Featured</span>
        <ul className="footer-categories">
          <li>New Releases</li>
          <li>Backpacks and Bags</li>
          <li>Footballs</li>
          <li>Goalkeeper Gloves</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCategories;
