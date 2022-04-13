
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { enderecosUsuario } from '../actions/enderecoActions'
import { listPayCardsUsuario } from "../actions/payCardAction";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";


export default function UserManagerScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const token = userInfo.token

  const endList = useSelector((state) => state.endList);
  const { loading, error, address } = endList;

  const payCardList = useSelector((state) => state.payCardList)
  const { loading2, error2, payCards } = payCardList


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listPayCardsUsuario(userInfo.id, token))
    dispatch(enderecosUsuario(userInfo.id, token))

  }, [dispatch, userInfo.id, token])


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : loading2 ? (
        <LoadingBox></LoadingBox>
      ) : error2 ? (<MessageBox variant="danger">{error2}</MessageBox>
      ) : (
        <div>
          <h1>Gerenciamento da Conta</h1>
          <div className="row top">
            <div className="col-2">
              <ul>
                <li>
                  <div className="card card-body">
                    <h2>Dados Pessoais</h2>
                    <p>
                      <strong>Nome: </strong>
                      {userInfo.name}
                    </p>
                    <p>
                      <strong> E-mail: </strong>
                      {userInfo.email}
                    </p>
                    <button>Editar Perfil</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row top">
            <div className="col-2">
              <ul>
                <li>
                  <div className="card card-body">
                    <h2>Cartões Cadastrados</h2>
                    <div>
                      <div>
                        {payCards.map((c) => (
                          <div>
                            <h2>Dados Cartão</h2>
                            <p>
                              <strong>Titular: </strong>
                              {c.cardHolderName}
                            </p>
                            <p>
                              <strong>Bandeira: </strong>
                              {c.bandeira}
                            </p>
                            <p>
                              <strong>Número do Cartão: </strong>
                              {c.number}
                            </p>
                            <button>Editar Cartão</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row top">
            <div className="col-2">
              <ul>
                <li>
                  <div className="card card-body">
                    <h2>Endereços Cadastrados</h2>
                    <div>
                      <div>
                        {address.map((s) => (
                          <div>
                            <h2>Dados Endereço</h2>
                            <p>
                              <strong>Endereço: </strong>
                              {s.address}
                            </p>
                            <p>
                              <strong>Cidade: </strong>
                              {s.city}
                            </p>
                            <p>
                              <strong>Código Postal: </strong>
                              {s.postalCode}
                            </p>
                            <p>
                              <strong>Estado: </strong>
                              {s.state}
                            </p>
                            <p>
                              <strong>Número: </strong>
                              {s.numero}
                            </p>
                            <p>
                              <strong>Bairro: </strong>
                              {s.bairro}
                            </p>
                            <button>Editar Endereço</button>
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