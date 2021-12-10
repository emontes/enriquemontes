import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: "web development text",
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "SEO",
    text: `SEO text`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Web Servers",
    text: `Web Servers text`,
  },
];

export default services;
