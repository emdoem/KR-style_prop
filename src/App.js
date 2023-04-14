import styled from "styled-components";
import './App.css';


function App() {
  // const buttonStyle = { backgroundColor: "red" };
  return (
    <div className="App">
      <header className="App-header">
        <Button type="danger">Click Me</Button>
        <PrimaryButton>Click Me</PrimaryButton>
        <Button>Click Me</Button>
        <StyledButton>Click Me Too!</StyledButton>
        <DangerButton>Warning!</DangerButton>
      </header>
    </div>
  );
}

const StyledButton = styled.button`
  --normal-background: green;
  --hover-background: darkgreen;
  --active-background: lightgreen;
  font-size: 20px; 
  color: white;
  background-color: var(--normal-background);
  border: none;
  border-radius: ${props => props.borderRadius || 5}px;
  outline: none;
  padding: 10px;
  margin:10px;

  &:hover {
    background-color: var(--hover-background);
  }
  
  &:active {
    background-color: var(--active-background);
  }
`;

const DangerButton = styled(StyledButton)`
  --normal-background: pink;
  --hover-background: red;
  --active-background: white;
`;

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
  // return <button className="Button" style={buttonStyle}>{props.children}</button>
  return <StyledButton borderRadius={15} style={buttonStyle}>{props.children}</StyledButton>
}

function PrimaryButton(props) {
  return <Button type="primary">{props.children}</Button>
}

export default App;
