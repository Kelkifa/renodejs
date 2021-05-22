import React from 'react';

class NavButton extends React.Component {
    clickHandler() {
        document.location = this.props.link;
    }
    render() {
        return (
            <button className={this.props.btnClass}
                onClick={this.clickHandler.bind(this)}>
                {this.props.elm === "h1" ? <h1>
                    {this.props.name}
                </h1>
                    : <h2>
                        {this.props.name}
                    </h2>
                }
            </button>
        )
    }
}
export default NavButton;