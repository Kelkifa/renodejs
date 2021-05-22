import './DocumentContent.scss';
const React = require('react');

class DocumentContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount() {
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    data: data
                })
            })
    }

    render() {
        return (
            <div id="DocCnt" className="DocCnt">

            </div>
        )
    }
}

export default DocumentContent;
