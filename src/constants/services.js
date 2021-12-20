import React from "react";
import { FaCode, FaSketch, FaDatabase } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: "web development text",
  },
  {
    id: 3,
    icon: <FaDatabase className="service-icon" />,
    title: "data modeling",
    text: `data modeling text`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "SEO",
    text: `SEO text`,
  },
];

export default services;
