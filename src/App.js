import React , {useState} from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PaccingList from "./components/PaccingList";
import Stats from "./components/Stats";

function App() {

  const [itemse, setItems] = useState([])
  function addfun(items){
    setItems([...itemse, items])
  }
  function removeFun(id){
    setItems(items=> items.filter((element)=> element.id !== id))
  }
  function sellectItem(id){
    setItems(itemse=> itemse.map(item=> item.id == id? {...item, packed:!item.packed} :item))
  }
  function sortList(value){
    console.log(value);
  }

  return (
    <div className="app" >
      <Logo />
      <Form  arr={setItems} addfun={addfun}/>
      <PaccingList sortList={sortList} sellectItem={sellectItem} removeFun={removeFun} arr={itemse} setItems={setItems} />
      <Stats itemse={itemse} />
    </div>
  );
}

export default App;



