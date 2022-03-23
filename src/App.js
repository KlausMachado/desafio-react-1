import "./App.css";
import ToUppercase from "./components/uppercase/uppercase";
import Button from "./components/button/button";

function App() {
  return (
  <>
    <ToUppercase />
    <ToUppercase />
    <div>
      <Button />
      <Button label='Agora aqui'/>
    </div>
  </>
  )
}

export default App;
