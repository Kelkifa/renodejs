import { useContext } from 'react';
import { wordContext } from '../../views/Word';
import './WCardContainer.scss';
import WCard from './WCard';
import { AuthContext } from '../../contexts/AuthContextProvider'


function WCardContainer(props) {
    const { words, reloadSignal } = useContext(wordContext);

    const { authState } = useContext(AuthContext);

    return (
        <div className="WCardContainer">

            {words.map(value => (
                <div key={value._id} className="WCardContainer__item">
                    <WCard DUshow={authState.user && authState.user.admin === true ? true : false}
                        word={value}
                        reloadSignal={reloadSignal} />
                </div>
            ))}
        </div>
    );
}

export default WCardContainer;