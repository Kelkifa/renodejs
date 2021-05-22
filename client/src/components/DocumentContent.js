import './DocumentContent.scss';
const React = require('react');

class DocumentContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        var { id } = useParams();
        return (
            <div id="DocCnt" className="DocCnt">
                <Router>
                </Router>
            </div>
        )
    }
}

export default DocumentContent;
