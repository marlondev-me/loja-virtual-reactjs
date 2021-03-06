import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  Container,
  ProductTable,
  Total
} from './styles';

export default function Card() {

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          { cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$2198,98</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: product.id })}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1099,99</strong>
        </Total>
      </footer>
    </Container>
  );
}
