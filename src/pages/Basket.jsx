import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const state = useSelector((store) => store.basketReducer);

  return (
    <div className="row p-2">
      {state.basket.length === 0 && (
        <h3 className="text-center mt-5">No products in your basket.</h3>
      )}

      {/* sepette ürün varsa */}
      {state.basket.length > 0 && (
        <>
          <div className="col-md-9">
            {state.basket.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>

          <div className="col-md-3 mt-5">
            <h5>Total: ${state.total.toFixed(2)}</h5>

            <button
              onClick={() =>
                alert("Payment completed, Total: " + state.total.toFixed(2))
              }
              className="btn btn-success mt-3"
            >
              Complete Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
