
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../actions/userActions";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";


export default function UserManagerScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const token = userInfo.token;

  const dispatch = useDispatch();

  const userDetailsHandler = (e) => {
    e.preventDefault();
    dispatch(userDetails(userInfo.id, token));
    props.history.push('/user/details');
  }

  const orderListHandler = (e) => {
    e.preventDefault();
    props.history.push('/orders');
  }

  return (
    <div>
      <h1>Gerenciamento da Conta</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
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
                    <button onClick={userDetailsHandler}>Editar Perfil</button>
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
                      <button>Visualizar Cartões Cadastrados</button>
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
                      <button>Visualizar Endereços Cadastrados</button>
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
                    <h2>Pedidos</h2>
                    <div>
                      <button onClick={orderListHandler}>Visualizar Pedidos Realizados</button>
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