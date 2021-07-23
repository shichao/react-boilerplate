import * as React from 'react';

export type Order = {
  price: number;
  size: number;
};

export const OrderItem = (props: { order: Order }) => {
  return (
    <div className="row">
      <div className="price">{props.order.price}</div>
      <div className="size">{props.order.size}</div>
    </div>
  );
};
