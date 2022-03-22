
import React, { useState ,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {enderecosUsuario} from '../actions/enderecoActions'


export default function UserManagerScreen(props){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    

    useEffect( () => {
      dispatch(enderecosUsuario(userInfo.id))
    },[dispatch])
    //const placeorder = useSelector(state => state.placeorder);
    //const { card } = placeorder;

    return(  
        <div>
            <h1>Gerenciamento da Conta</h1>
        <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Dados Pessoais</h2>
                <p>{userInfo.id}</p>
                <p>
                  <strong>Nome: </strong>
                  {userInfo.name}
                </p>
                <p>
                  <strong>Data de nascimento: </strong>
                  {userInfo.dtNasc}
                </p>
                <p>
                  <strong> Gênero: </strong>
                  {userInfo.genero}
                </p>
                <p>
                  <strong> CPF: </strong>
                  {userInfo.cpf}
                </p>
                <p>
                  <strong> Tipo de Telefone: </strong>
                  {userInfo.tipoTel}
                </p>
                <p>
                  <strong> Telefone: </strong>
                  {userInfo.tel}
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
                <h2>Endereços Cadastrados</h2>
                <p >
                  <strong>Apelido: </strong>
                  {}
                </p>
                <button>Editar Perfil</button>
              </div>
            </li>
        </ul>
    </div>
    </div>
    </div>
    )
}