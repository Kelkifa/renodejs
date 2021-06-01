import '../components/customScss/tests.scss';
import '../components/Doc/doc.scss';
import MultiInputContainer from '../components/InputComponents/MultiInputContainer.jsx';
import React from 'react';

const NumberContext = React.createContext();
function Test() {

    /** Render */
    return (
        <NumberContext.Provider value={1293}>
            <div className="test">
                <NumberContext.Consumer>
                    {(context) => <h2>{context}</h2>}
                </NumberContext.Consumer>
            </div>
        </NumberContext.Provider>
    )
}

export default Test;