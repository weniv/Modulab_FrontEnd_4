import Hello from "./components/Hello";
import Time from "./components/Time";
import ColorText from "./components/ColorText";

function HelloProps(props) {
    return (
        <div>
            <p>my name is {props.name} and age is {props.age}</p>
            <strong>you are {props.someFunc()}</strong>
            <p>this is someArr {[...props.someArr]}</p>
            <p>this is someObj {props.someObj.one}</p>
            {props.someJSX}
        </div>
    )
}

function App() {
    return (
        <>
            <ColorText color="red" />
            <ColorText color="teal" />
            <ColorText color="skyblue" />
            <ColorText color="royalblue" />

            <HelloProps
                name="jaehyun"
                age={25}
                someFunc={() => 'awesome!!!'}
                someJSX={<img src="https://picsum.photos/id/237/200/300" />}
                someArr={[1, 2, 3]}
                someObj={{ one: 1 }} />
        </>
    );
}

export default App;