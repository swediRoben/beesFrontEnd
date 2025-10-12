 import { React } from "react";
import Menu from "./pages/menu";
import "./App.css" 

function App() {
  const token = sessionStorage.getItem('token');
  console.log(token)
  return (
    <div className={styles.body}>
     <Menu/>   
    </div>
  );
}

export default App;



