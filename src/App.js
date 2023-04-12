import logo from './logo.svg';
import './App.css';

function App() {
  // const buttonStyle = { backgroundColor: "red" };
  return (
    <div className="App">
      <header className="App-header">
        <Button type="danger">Click Me</Button>
        <PrimaryButton>Click Me</PrimaryButton>
        <Button>Click Me</Button>
      </header>
    </div>
  );
}


function Button(props) {
  const buttonStyle = {}
  if (props.type === "primary") {
    buttonStyle["--normal-background"] = "blue";
    buttonStyle["--hover-background"] = "darkblue";
    buttonStyle["--active-background"] = "lightblue";
  } else if (props.type === "danger") {
    buttonStyle["--normal-background"] = "red";
    buttonStyle["--hover-background"] = "darkred";
    buttonStyle["--active-background"] = "pink";
  }
  buttonStyle["--border-radius"] = "12px"
  return <button className="Button" style={buttonStyle}>{props.children}</button>
}

function PrimaryButton(props) {
  return <Button type="primary">{props.children}</Button>
}

export default App;
