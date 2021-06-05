import { useContext } from 'react';
import { WordContext } from '../../contexts/WordContextProvider';

import './WCardContainer.scss';
import WCard from './WCard';
// import WCardUpdate from './WCardUpdate';

function WCardContainer(props) {
    const words = useContext(WordContext);
    console.log(words);

    return (
        <div className="WCardContainer">
            {words.map(value => (
                <>
                    <WCard />
                </>
            ))}
        </div>
    );
}

export default WCardContainer;


// imgLink: PropTypes.string,
//     frontContent: PropTypes.string,
//     backContent: PropTypes.string,