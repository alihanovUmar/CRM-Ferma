<<<<<<< HEAD
=======
import React from "react";

export default function OrdersSum({ size, piecessum, allsum }) {
  return (
    <div className="order_sum">
      <h3>
        {size}
        <span>({piecessum}):</span>
      </h3>
      <div className="border_bottom"></div>
      <h2>{allsum}</h2>
    </div>
  );
}
>>>>>>> e6863ed345b905699b6a840b17b1d8168d33ecb8
