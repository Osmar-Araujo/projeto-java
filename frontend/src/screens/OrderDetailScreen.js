import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderStatus, detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/boxes/LoadingBox';
import MessageBox from '../components/boxes/MessageBox';


export default function OrderDetailScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const token = userInfo.token
  const [status, setStatus] = useState('');

  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.detailsOrder);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  console.log(orderDetails);

  const changeStatusHandler = () => {
    dispatch(changeOrderStatus(orderId, token, status, order.totalPrice, userInfo.id));
  }

  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return (
    <div>
      <h1>Order </h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name:</strong>  <br />
                    <strong>Address: </strong> ,
                    ,{' '}
                    ,

                  </p>

                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong>
                  </p>

                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Order Items</h2>
                  <ul>

                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Items</div>
                    <div>$</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status: {order.status}</div>
                    <select
                      id="status"
                      required
                      onChange={(e) => setStatus(e.target.value)}>
                      <option value=" ">Selecione</option>
                      <option value="APROVADO">APROVADO</option>
                      <option value="ENVIADO">ENVIADO</option>
                      <option value="ENTREGUE">ENTREGUE</option>
                      <option value="DEVOLVIDO">DEVOLVIDO</option>
                    </select>
                    <button onClick={changeStatusHandler}>Alterar</button>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Tax</div>
                    <div>$</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>$</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}