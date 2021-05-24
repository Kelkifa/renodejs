import './DocumentNavbar.scss';
const React = require('react');


class DocumentNavbar extends React.Component {
    handleClick(link) {
        document.location = `?type=${link}`;
    }
    render() {
        return (
            <div id="DocumentNavbar" className="DocNavb">
                <div className="DocNavb__item" onClick={() => { this.handleClick('NodeJS'); }}>NodeJS</div>
                <div className="DocNavb__item" onClick={() => { this.handleClick('ReactJS'); }}>ReactJS</div>
                <div className="DocNavb__item" onClick={() => { this.handleClick('Javascript'); }}>Javascript</div>
                <div className="DocNavb__item" onClick={() => { this.handleClick('CSS'); }}>CSS</div>
                <div className="DocNavb__item" onClick={() => { this.handleClick('PHP'); }}>PHP</div>
                <div className="DocNavb__item" onClick={() => { this.handleClick('IOT'); }}>IOT</div>
            </div>
        )
    }
}

export default DocumentNavbar;