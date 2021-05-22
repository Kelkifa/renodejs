import './DocumentNavbar.scss';
const React = require('react');


class DocumentNavbar extends React.Component {
    render() {
        return (
            <div id="DocumentNavbar" className="DocNavb">
                <div className="DocNavb__item">NodeJS</div>
                <div className="DocNavb__item">ReactJS</div>
                <div className="DocNavb__item">Javascript</div>
                <div className="DocNavb__item">CSS</div>
                <div className="DocNavb__item">PHP</div>
            </div>
        )
    }
}

export default DocumentNavbar;