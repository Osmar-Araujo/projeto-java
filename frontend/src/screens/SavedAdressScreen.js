import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { enderecosUsuario } from '../actions/enderecoActions'
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";



export default function UserManagerScreen(props) {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [apelido, setApelido] = useState(shippingAddress.apelido);
    const [ad, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [state, setState] = useState(shippingAddress.state);
    const [numero, setNumero] = useState(shippingAddress.numero);
    const [bairro, setBairro] = useState(shippingAddress.bairro);  

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const token = userInfo.token

  const endList = useSelector((state) => state.endList);
  const { loading, error, address } = endList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enderecosUsuario(userInfo.id, token))
  }, [dispatch, userInfo.id, token])

  const selectHandler = (e) => {
    e.preventDefault();
    const fullName = userInfo.name;
    const id_usuario = userInfo.id;
    dispatch(saveShippingAddress({ apelido, fullName, id_usuario, ad, city, postalCode, state, numero, bairro }));
    props.history.push('/payment');
  }

  return (
    <div>
    <CheckoutSteps step1 step2></CheckoutSteps>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <h1>Endereços Cadastrados</h1>
          <div className="row top">
            <div className="col-2">
              <ul>
                <li>
                  <div className="card card-body">
                    <div>
                      <div>
                        {address.map((s) => (
                          <div key={s.id}>
                            <p id="apelido">
                              <strong>Apelido: </strong>
                              {s.apelido}
                            </p>
                            <p id="address">
                              <strong>Endereço: </strong>
                              {s.address}
                            </p>
                            <p id="city">
                              <strong>Cidade: </strong>
                              {s.city}
                            </p>
                            <p id="postalCode">
                              <strong>Código Postal: </strong>
                              {s.postalCode}
                            </p>
                            <p id="state">
                              <strong>Estado: </strong>
                              {s.state}
                            </p>
                            <p id="numero">
                              <strong>Número: </strong>
                              {s.numero}
                            </p>
                            <p id="bairro">
                              <strong>Bairro: </strong>
                              {s.bairro}
                            </p>
                            <button onClick={selectHandler}>Utilizar Endereço</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}