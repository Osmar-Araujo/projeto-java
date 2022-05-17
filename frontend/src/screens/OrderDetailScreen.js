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
  const [ok, setOk] = useState(false)

  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.detailsOrder);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();

  const changeStatusHandler = () => {
    dispatch(changeOrderStatus(orderId, token, status, order.totalPrice, userInfo.id));
  }


  useEffect(() => {
    if (loading === false) {
      setStatus(order.status)
    }
  }, [loading])

  useEffect(() => {
    dispatch(detailsOrder(orderId, token));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (status === "ENTREGUE") {
      setOk(true)
    }
  }, [status])

  return (
    <div>
      <h1>Pedido</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <h2>Endereço de Envio/Cobrança</h2>
                  <p>
                    <strong>Apelido:</strong> {order.endereco.apelido}<br />
                    <strong>Endereço:</strong>{order.endereco.address} - {order.endereco.numero}<br />
                    <strong>Código Postal:</strong>{order.endereco.postalCode}<br />
                    <strong>Bairro:</strong> {order.endereco.bairro}<br />
                    <strong>Cidade:</strong> {order.endereco.city}<br />
                    <strong>Estado:</strong> {order.endereco.state}
                  </p>
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Pagamento</h2>
                  <p>
                    <strong>Número do Cartão:</strong> {order.cartao.number}<br />
                    <strong>Titular do Cartão:</strong> {order.cartao.cardHolderName}<br />
                    <strong>Bandeira do Cartão:</strong> {order.cartao.bandeira}<br />
                    <strong>Data de Vencimento:</strong> {order.cartao.dueData}
                  </p>
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Items do Pedido</h2>
                  <ul>
                    <div >
                      {order.produtos.map((prod) => (
                        <li>
                          <p>{prod.name}</p>
                          <p>{prod.category}</p>
                          <p>{prod.price}</p>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Resumo do Pedido</h2>
                </li>
                <li>
                  <div className="row">
                    <p>Data do Pedido: {order.dataPedido}</p>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status Atual: {order.status}</div>
                    {
                      userInfo.admin ? (
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
                      ) : ok ? (
                        <select
                          id="status"
                          required
                          onChange={(e) => setStatus(e.target.value)}>
                          <option value=" ">Selecione</option>
                          <option value="DEVOLUÇÃO_PENDENTE">Solicitar Devolução</option>
                        </select>
                      ) : <></>
                    }
                    <button onClick={changeStatusHandler}>Enviar</button>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Taxa de Envio</div>
                    <div>${order.taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong>Total do Pedido</strong>
                    </div>
                    <div>
                      <strong>${order.totalPrice}</strong>
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