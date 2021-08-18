import Item from "./Item"

function ItemList(props) {
 

 const arr=props.products

  return (
    <div   style={{backgroundColor:"goldenrod",width:'400px',margin:'auto'}}  >
      <h2>Product list</h2>
{
arr.map(el=> <Item  product={el}   />    )
}
     
    </div>
  );
}

export default ItemList;
