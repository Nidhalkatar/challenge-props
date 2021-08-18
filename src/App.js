import "./App.css";
import ItemList from "./component/ItemList";
function App() {

 let itemArray= [
  {
    Image: `./range.jpg`,
    name: 'range',
    price: `99.999 $`,
  },
  {
    Image: `./mercedes.jpg`,
    name: 'mercedes',
    price: `76.999 $`,
  },
  {
    Image: `volvo.jpg`,
    name: 'volvo',
    price: `89.999 $`,
  },
]

  return (
    <div className='App'>
      <h1 style={{ color: "rosybrown" }}> Challenge Props</h1>
     <ItemList products={itemArray}/>
    </div>
  );
}

export default App;
