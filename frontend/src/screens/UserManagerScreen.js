
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";


export default function UserManagerScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const token = userInfo.token;

  const dispatch = useDispatch();


  return (
    <div>
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
        </div>
    </div>
  )
}