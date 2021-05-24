import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <div className={"card scroll--custom scroll--blue " + this.props.addClass}>
                <img className="card__img" src={this.props.imgLink} alt="not found" />
                <p className="card__text">{this.props.children}</p>
                <button className="card__btn">Go Somewhere</button>
            </div>
        )
    }
}
export default Card;
