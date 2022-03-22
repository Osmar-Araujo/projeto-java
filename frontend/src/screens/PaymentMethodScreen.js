import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import { registerPayCard } from "../actions/payCardAction";
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";

export default function PaymentMethodScreen(props) {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;


  if (!shippingAddress.address) {
    props.history.push('shipping');
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();


    const idUsuario = userInfo.id;

    dispatch(savePaymentMethod({ idUsuario, number, cardHolderName, cvc, dueData }));
    props.history.push('/placeorder');

    dispatch(registerPayCard(idUsuario, number, cardHolderName, cvc, dueData));
  };

  const [number, setNumber] = useState(paymentMethod.number);
  const [cardHolderName, setCardHolderName] = useState(paymentMethod.cardHolderName);
  const [cvc, setCvc] = useState(paymentMethod.cvc);
  const [dueData, setDueDate] = useState(paymentMethod.dueData);


  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Pagamento com Cartão</h1>
        </div>
        <div>
          <label htmlFor="number">Número do Cartão</label>
          <input
            type="number"
            id="number"
            placeholder="Entre o número do Cartão"
            value={number}
            onChange={(e) => setNumber(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="cardHolderName">Nome do Titular do Cartão</label>
          <input
            type="text"
            id="cardHolderName"
            placeholder="Entre o nome do Titular do Cartão"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="cvc">CVC do Cartão</label>
          <input
            type="number"
            id="cvc"
            placeholder="Entre com o CVC do Cartão"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="dueDate">Data de Vencimento do Cartão</label>
          <input
            type="date"
            id="dueData"
            placeholder="Entre com a data de vencimento do Cartão"
            value={dueData}
            onChange={(e) => setDueDate(e.target.value)} required
          />
        </div>
        <div>
          <button className="primary" type="submit">Continuar</button>
        </div>
      </form>
    </div>
  );
}
