import React from 'react';
import Card from '../components/Card.js';
class Anime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch('/api/anime')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data, isLoaded: true })
            });
    }
    render() {
        const { items, isLoaded } = this.state;
        if (!isLoaded) {
            return <div> Loading ... </div>
        }
        var content = items.map(item => {
            return (
                <Card key={item._id} imgLink={item.img}
                    addClass="mr-r-20 mr-b-20">
                    {item.description}
                </Card>
            )
        })
        return (
            <div className="cards">
                {content}
            </div>
        )
    }
}

export default Anime;