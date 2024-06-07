import Component1 from './components/Component1';
import Component2 from './components/Component2';
import obj from './exports';

function App() {
    console.log('DD', Object.keys(obj));
    return (
        <>
            <Component1 />
            <Component2 />
        </>
    );
}

export default App;
