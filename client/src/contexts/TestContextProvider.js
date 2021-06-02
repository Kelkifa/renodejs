import React, { createContext, useState } from 'react';

export const TestContext = createContext();

function TestContextProvider(props) {
    const { children } = props
    const [myState, setState] = useState({
        is: false,
        user: 1
    });

    function login(value) {
        const copyMyState = { myState };
        copyMyState.is = true;
        copyMyState.user = myState.user + value;
        setState(copyMyState);
    }
    const data = { login, myState };
    return (
        <TestContext.Provider value={data}>
            {children}
        </TestContext.Provider>
    );
}

export default TestContextProvider
