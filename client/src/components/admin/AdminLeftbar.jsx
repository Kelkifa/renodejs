import './AdminLeftbar.scss';
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
                <li className="AdminLeftbar__list__item__container">
                    <AiOutlineAreaChart className="AdminLeftbar__list__item__icon" />
                    <div className="AdminLeftbar__list__item__text color--gray">Databoard</div>
                </li>
                <li className="AdminLeftbar__list__title">EXTRAS</li>
                <li className="AdminLeftbar__list__item">
                    <div className="AdminLeftbar__list__item__container"  >
                        <AiOutlineStar className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Pages</div>
                        <MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />
                    </div>
                    <ul className="AdminLeftbar__DropdownList">
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Anime
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Word
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Document
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            KeyTrain
                        </li>
                    </ul>
                </li>
                <li className="AdminLeftbar__list__title">MANAGE</li>
                <li className="AdminLeftbar__list__item">
                    <div className="AdminLeftbar__list__item__container">
                        <BiCameraMovie className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Animes</div>
                        <MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />
                    </div>
                    <ul className="AdminLeftbar__DropdownList">
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Anime list
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Update animes
                        </li>
                    </ul>
                </li>
                <li className="AdminLeftbar__list__item">
                    <div className="AdminLeftbar__list__item__container">
                        <AiOutlineFileText className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Documents</div>
                        <MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />
                    </div>
                    <ul className="AdminLeftbar__DropdownList">
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Document list
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Update documents
                        </li>
                    </ul>
                </li>
                <li className="AdminLeftbar__list__item">
                    <div className="AdminLeftbar__list__item__container">
                        <FaRegFileWord className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Words</div>
                        <MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />
                    </div>
                    <ul className="AdminLeftbar__DropdownList">
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Word list
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Update words
                        </li>
                    </ul>
                </li>
                <li className="AdminLeftbar__list__item">
                    <div className="AdminLeftbar__list__item__container">
                        <FiUsers className="AdminLeftbar__list__item__icon" />
                        <div className="AdminLeftbar__list__item__text color--gray">Users</div>
                        <MdExpandMore className="AdminLeftbar__list__item__icon dropdown--hide" />
                    </div>
                    <ul className="AdminLeftbar__DropdownList">
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            User list
                        </li>
                        <li className="AdminLeftbar__DropdownList__item AdminLeftbar__list__item__text">
                            Update users
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default AdminLeftbar;


{/* <h3 className="AdminLeftbar__item AdminLeftbar__item--header">ADMIN</h3>
            <ul className="AdminLeftbar__list">
                <li className="AdminLeftbar__item--title">EXTRAS</li>
                <li className="AdminLeftbar__item AdminLeftbar__item--dropdown" onClick={changeIconHandler}>
                    <AiOutlineStar className="AdminLeftbar__item__icon" />
                    <div className="AdminLeftbar__item__text">Pages</div>
                    <MdExpandMore className={changeIcon ? "AdminLeftbar__item__icon clickedIcon" : "AdminLeftbar__item__icon DropdownIcon"} />
                </li>
            </ul> */}