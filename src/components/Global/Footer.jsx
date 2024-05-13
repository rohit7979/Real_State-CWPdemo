import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaForumbee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`w-full py-6 lg:pt-12 bg-blue-50 ${styles.paddingHorizontal} flex flex-col gap-6`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-2xl font-semibold flex items-start gap-1">
            <FaForumbee className="text-yellow-500 text-3xl" />
            Beehome
          </h1>
          <div className="flex items-center gap-5">
            <RiFacebookFill className="text-gray-500 text-sm cursor-pointer" />
            <FaTwitter className="text-gray-500 text-sm cursor-pointer" />
            <FaInstagram className="text-gray-500 text-sm cursor-pointer" />
            <FaLinkedinIn className="text-gray-500 text-sm cursor-pointer" />
            <FaYoutube className="text-gray-500 text-sm cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start lg:pt-1">
          <h1 className="font-semibold">Product</h1>
          <Link to="/sell" className="text-gray-500 text-sm font-medium">
            Sell
          </Link>
          <Link to="/buy" className="text-gray-500 text-sm font-medium">
            Buy
          </Link>
          <Link to="/advertise" className="text-gray-500 text-sm font-medium">
            Advertise
          </Link>
          <Link to="/our-agent" className="text-gray-500 text-sm font-medium">
            Our agent
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-start lg:pt-1">
          <h1 className="font-semibold">Company</h1>
          <Link to="/about" className="text-gray-500 text-sm font-medium">
            About
          </Link>
          <Link to="/contact-us" className="text-gray-500 text-sm font-medium">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-start lg:pt-1">
          <h1 className="font-semibold">Support</h1>
          <Link
            to="/getting-started"
            className="text-gray-500 text-sm font-medium"
          >
            Getting started
          </Link>
          <Link to="/help-center" className="text-gray-500 text-sm font-medium">
            Help center
          </Link>
          <Link to="/report-bug" className="text-gray-500 text-sm font-medium">
            Report a bug
          </Link>
          <Link
            to="/chat-support"
            className="text-gray-500 text-sm font-medium"
          >
            Chat support
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-start lg:pt-1">
          <h1 className="font-semibold">Contact us</h1>
          <Link
            to="mailto:beehome@gmail.com"
            className="text-gray-500 text-sm font-medium"
          >
            contact@beehome.com
          </Link>
          <Link to="tel:" className="text-gray-500 text-sm font-medium">
            (414)687-5892
          </Link>
          <Link to="/" className="text-gray-500 text-sm font-medium">
            794 London, United Kingdom
          </Link>
        </div>
      </div>
      <div className="border border-gray-300 w-full mt-6" />
      <div className="w-full flex items-center justify-start md:justify-between flex-wrap gap-6">
        <p className="text-gray-500 text-xs font-medium">
          Copyright © Beehome - 2024
        </p>
        <p className="text-gray-500 text-xs font-medium">
          All rights reserved | Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
