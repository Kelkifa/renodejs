import './AdminLeftbar.scss';
import Dropdown from './Dropdown';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { AiOutlineStar } from 'react-icons/ai';
import { MdExpandMore } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { GrDocumentConfig } from "react-icons/gr";
import { FaRegFileWord } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { useState } from "react";

AdminLeftbar.propTypes = {

};

function AdminLeftbar(props) {
    /** State */

    /** handler function */
    return (
        <div className="AdminLeftbar">
            <h3 className="AdminLeftbar__header">
                <RiAdminLine />
                <div className="AdminLeftbar__header__text">ADMIN</div>
            </h3>
            <ul className="AdminLeftbar__list">
                <li>
                    <Link to="/admin/databoard" style={{ textDecoration: "none", display: "flex" }} className="AdminLeftbar__list__item__container">
                        <AiOutlineAreaChart className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Databoard</div>
                    </Link>
                </li>
                <li className="AdminLeftbar__list__item">
                    <Dropdown showElement={
                        {
                            element: (
                                <div className="AdminLeftbar__list__item__container">
                                    <AiOutlineStar className="AdminLeftbar__list__item__icon" />
                                    <div className="AdminLeftbar__list__item__text color--gray">Pages</div>
                                </div>),
                            containerClass: "AdminLeftbar__dropdown__show",
                        }}
                        dropdownIcon={{
                            dropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon" />),
                            nonDropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />),
                        }}
                        hideElement={(
                            <ul className="AdminLeftbar__DropdownList">
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/home" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Home</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/anime" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Anime</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/word" style={{ textDecoration: "none", width: "100%" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Word</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/document" style={{ textDecoration: "none" }} >
                                        <div className="AdminLeftbar__DropdownList__item__text">Document</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">KeyTrain</div>
                                    </Link>
                                </li>
                            </ul>
                        )}>
                    </Dropdown>
                </li>
                <li className="AdminLeftbar__list__title">MANAGE</li>
                <li className="AdminLeftbar__list__item">
                    <Dropdown showElement={
                        {
                            element: (
                                <div className="AdminLeftbar__list__item__container">
                                    <BiCameraMovie className="AdminLeftbar__list__item__icon" />
                                    <div className="AdminLeftbar__list__item__text color--gray">Animes</div>
                                </div>),
                            containerClass: "AdminLeftbar__dropdown__show",
                        }}
                        dropdownIcon={{
                            dropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon" />),
                            nonDropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />),
                        }}
                        hideElement={(
                            <ul className="AdminLeftbar__DropdownList">
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Anime list</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Update anime</div>
                                    </Link>
                                </li>
                            </ul>
                        )}>
                    </Dropdown>
                </li>
                <li className="AdminLeftbar__list__item">
                    <Dropdown showElement={
                        {
                            element: (
                                <div className="AdminLeftbar__list__item__container">
                                    <AiOutlineFileText className="AdminLeftbar__list__item__icon" />
                                    <div className="AdminLeftbar__list__item__text color--gray">Documents</div>
                                </div>),
                            containerClass: "AdminLeftbar__dropdown__show",
                        }}
                        dropdownIcon={{
                            dropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon" />),
                            nonDropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />),
                        }}
                        hideElement={(
                            <ul className="AdminLeftbar__DropdownList">
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Document list</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Update documents</div>
                                    </Link>
                                </li>
                            </ul>
                        )}>
                    </Dropdown>
                </li>
                <li className="AdminLeftbar__list__item">
                    <Dropdown showElement={
                        {
                            element: (
                                <div className="AdminLeftbar__list__item__container">
                                    <FaRegFileWord className="AdminLeftbar__list__item__icon" />
                                    <div className="AdminLeftbar__list__item__text color--gray">Words</div>
                                </div>),
                            containerClass: "AdminLeftbar__dropdown__show",
                        }}
                        dropdownIcon={{
                            dropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon" />),
                            nonDropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />),
                        }}
                        hideElement={(
                            <ul className="AdminLeftbar__DropdownList">
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Word list</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/keytrain" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Update words</div>
                                    </Link>
                                </li>
                            </ul>
                        )}>
                    </Dropdown>
                </li>
                <li className="AdminLeftbar__list__item">
                    <Dropdown showElement={
                        {
                            element: (
                                <div className="AdminLeftbar__list__item__container">
                                    <FiUsers className="AdminLeftbar__list__item__icon" />
                                    <div className="AdminLeftbar__list__item__text color--gray">Users</div>
                                </div>),
                            containerClass: "AdminLeftbar__dropdown__show",
                        }}
                        dropdownIcon={{
                            dropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon" />),
                            nonDropdownElement: (<MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />),
                        }}
                        hideElement={(
                            <ul className="AdminLeftbar__DropdownList">
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/admin/users" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">User list</div>
                                    </Link>
                                </li>
                                <li className="AdminLeftbar__DropdownList__item">
                                    <Link to="/admin/users" style={{ textDecoration: "none" }}>
                                        <div className="AdminLeftbar__DropdownList__item__text">Update user</div>
                                    </Link>
                                </li>
                            </ul>
                        )}>
                    </Dropdown>
                </li>
            </ul>
        </div >
    );
}

export default AdminLeftbar;