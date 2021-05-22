import '../components/DocumentLeftbar.scss';
const React = require('react');

class DocumentLeftbar extends React.Component {
    render() {
        return (
            <div id="DocLeftbar" className="DocLeftbar">
                <div className="DocLeftbar__item">
                    Content 1
                </div>
                <div className="DocLeftbar__item">
                    Content 2
                </div>
                <div className="DocLeftbar__item">
                    Content 3
                </div>
                <div className="DocLeftbar__item">
                    Content 4
                </div>
            </div>
        )
    }
}

export default DocumentLeftbar;