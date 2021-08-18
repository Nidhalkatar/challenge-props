import PropTypes from "prop-types"
function Item(Props) {

    const alertProduct= (name)=> alert (`this super car is a ${name}`);
  return (
    <div style={{backgroundColor:"skyblue"}} onClick={()=> alertProduct(Props.product.name)}  >
      <h3> {Props.product.name} </h3>
      <img style={{width:"300px"}} src={Props.product.Image} alt=""/>
      <h4> {Props.product.price} </h4>
    </div>
  );
  Item.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    alertProduct : PropTypes.func
}
}
export default Item
