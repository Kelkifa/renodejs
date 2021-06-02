import '../components/customScss/tests.scss';
import '../components/Doc/doc.scss';
import React, { useState, useContext, createContext } from 'react';
import Login from '../views/Login';
import AuthContextProvider from '../contexts/AuthContextProvider';
import { set } from 'mongoose';
// import TestContextProvider from '../contexts/TestContextProvider';
// import { TestContext } from '../contexts/TestContextProvider';
const ACTION = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}



const TestContext = createContext();

function TestContextProvider(props) {
    const { children } = props
    const [myState, setState] = useState(2);

    function login() {
        setState(myState + 1);
    }
    const data = { login, myState };
    return (
        <TestContext.Provider value={data}>
            {children}
        </TestContext.Provider>
    );
}


function Test() {
    // const [testState, setTestState] = useState(1);
    function handlerClick(cState) {
        console.log(cState);
    }
    /** Render */
    return (
        <TestContextProvider>
            <p>Result:</p>
            <CusBtn btnClick={handlerClick}></CusBtn>

        </TestContextProvider>
    )
}

export default Test;

function CusBtn(props) {
    const { btnClick } = props;
    const ct = useContext(TestContext);
    console.log(ct);

    function handlerClick() {
        ct.login();
        btnClick(ct.myState);
    }
    return (
        <button onClick={handlerClick}>
            Test btn
        </button>
    )
}

// const NumberContext = React.createContext();

{/* <AuthContextProvider>
                <Login />
            </AuthContextProvider> */}

{/* <NumberContext.Provider value={1293}>
<div className="test">
    <NumberContext.Consumer>
        {(context) => <h2>{context}</h2>}
    </NumberContext.Consumer>
</div>
</NumberContext.Provider> */}


/** Effect */
// useEffect(() => {
//     const fetchUser = async () => {
//         try {
//             // const params = { type: 'NodeJS' };
//             const response = await userApi.login({ username: 'huan', password: 'Kelkifa123' });
//             console.log(response);

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     fetchUser();
// }, []);