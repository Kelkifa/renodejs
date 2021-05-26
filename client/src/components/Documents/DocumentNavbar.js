const React = require('react');


class DocumentNavbar extends React.Component {
    handleClick(link) {
        document.location = `/document?type=${link}`;
    }
    render() {
        return (
            <div className="doc__navbar">
                <div className="doc__navbar__item" onClick={() => { this.handleClick('NodeJS'); }}>NodeJS</div>
                <div className="doc__navbar__item" onClick={() => { this.handleClick('ReactJS'); }}>ReactJS</div>
                <div className="doc__navbar__item" onClick={() => { this.handleClick('Javascript'); }}>Javascript</div>
                <div className="doc__navbar__item" onClick={() => { this.handleClick('CSS'); }}>CSS</div>
                <div className="doc__navbar__item" onClick={() => { this.handleClick('PHP'); }}>PHP</div>
                <div className="doc__navbar__item" onClick={() => { this.handleClick('IOT'); }}>IOT</div>
            </div>
        )
    }
}

export default DocumentNavbar;