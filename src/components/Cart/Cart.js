import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {

  const CardHandler = (
    <ul className={classes["cart-items"]}>
      {[{ id: "m1", name: "Sushi", Amount: 2, Price: 35.62 }].map((food) => (
        <li>{food.name}</li>
      ))}
    </ul>
  );

  return (

    <Modal>
      {CardHandler}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;