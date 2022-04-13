import React from 'react';

export default function Address(props) {
  const { address } = props;
  return (
    <div key={address.id} className="card">
      <div>
        <ul>
          <li>
            <div className="card card-body">
              <h2>Dados Endereço</h2>
              <p>
                <strong>Endereço: </strong>
                {address.address}
              </p>
              <p>
                <strong>Cidade: </strong>
                {address.city}
              </p>
              <p>
                <strong>Código Postal: </strong>
                {address.postalCode}
              </p>
              <p>
                <strong>Estado: </strong>
                {address.state}
              </p>
              <p>
                <strong>Número: </strong>
                {address.number}
              </p>
              <p>
                <strong>Bairro: </strong>
                {address.bairro}
              </p>
              <button>Editar Perfil</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

}