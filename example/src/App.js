import React, {useEffect} from 'react';
import {sayHi} from '@theleepriest/simple-react-carousel';

const App = () => {
    useEffect(() => {
        sayHi();
    });

    return (
        <h1>Hello world!</h1>
    )
};

export default App;
