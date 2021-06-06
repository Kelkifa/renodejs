import { useContext } from 'react';
import { WordContext } from '../../contexts/WordContextProvider';
import './WCardContainer.scss';
import WCard from './WCard';


function WCardContainer(props) {
    const { words } = useContext(WordContext);
    return (
        <div className="WCardContainer">
            {words.map(value => (<WCard key={value._id} word={value} />))}
        </div>
    );
}

export default WCardContainer;