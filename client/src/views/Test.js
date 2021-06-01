import '../components/customScss/tests.scss';
import '../components/Doc/doc.scss';
// import MultiInputContainer from '../components/InputComponents/MultiInputContainer.jsx';
import React from 'react';
import Login from '../views/Login';
import AuthContextProvider from '../contexts/AuthContextProvider';

const ACTION = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}


function Test() {

    /** Render */
    return (
        <div>
            <AuthContextProvider>
                <Login />
            </AuthContextProvider>
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