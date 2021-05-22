import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <div className={"card " + this.props.addClass}>
                <img src={this.props.imgLink} />
                <div className="cnt-card scroll--custom scroll--blue">
                    <p>{this.props.children}</p>
                    <div className="card-btn-container">
                        <button className="btn--card">Go Somewhere</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;