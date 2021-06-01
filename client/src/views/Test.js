import '../components/customScss/tests.scss';
import '../components/Doc/doc.scss';
// import MultiInputContainer from '../components/InputComponents/MultiInputContainer.jsx';
import React, { useReducer, useEffect } from 'react';
import documentApi from '../api/documentApi';

const ACTION = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.INCREASE:
            return { count: state.count + 1 }
            break;
        case ACTION.DECREASE:
            return { count: state.count - 1 }
            break;
        default:
            throw new Error();
    }
}

function Test() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    /** Effect */
    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const params = { type: 'NodeJS' };
                const response = await documentApi.getAll(params);
                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }

        fetchDocument();
    }, []);

    /** Render */
    return (
        <div className="test">
            <div>
                <button onClick={() => dispatch({ type: ACTION.INCREASE })}>+</button>
                <p>{state.count}</p>
                <button onClick={() => dispatch({ type: ACTION.DECREASE })}>-</button>
            </div>
        </div>
    )
}

export default Test;

// const NumberContext = React.createContext();

{/* <NumberContext.Provider value={1293}>
<div className="test">
    <NumberContext.Consumer>
        {(context) => <h2>{context}</h2>}
    </NumberContext.Consumer>
</div>
</NumberContext.Provider> */}