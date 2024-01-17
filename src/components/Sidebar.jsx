import React from "react";
import { Col } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";


import "../styles/Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Col xs={1}>
        <a href="" className="sidebar-icon"><MdOutlineKeyboardArrowUp /></a>
        <a href="" className="sidebar-icon"><FaRegCircle /></a>
        <a href="" className="sidebar-icon"><FaRegCircle /></a>
        <a href="" className="sidebar-icon"><FaRegCircle /></a>
        <a href="" className="sidebar-icon"><FaRegCircle /></a>
        <a href="" className="sidebar-icon"><MdOutlineKeyboardArrowDown /></a>
      </Col>
    </div>
  )
}

export default Sidebar
