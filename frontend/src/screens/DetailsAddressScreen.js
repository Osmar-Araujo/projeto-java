import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { detailsAddress } from '../actions/enderecoActions';
import LoadingBox from '../components/boxes/LoadingBox';
import MessageBox from '../components/boxes/MessageBox';


export default function DetailsAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const token = userInfo.token

  const addressId = props.match.params.id;
  const endDetails = useSelector((state) => state.endDetails);
  const { address, loading, error } = endDetails;
  const dispatch = useDispatch();

  const selectAddress = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
    props.history.push('/payment');
  }

  useEffect(() => {
    dispatch(detailsAddress(addressId, token));
  }, [dispatch, addressId]);

  return (
    <div>
      <h1>Endereço </h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="card card-body">
          <h2>Endereço de Envio/Cobrança</h2>
          <p>
            <strong>Apelido:</strong> {address.apelido}<br />
            <strong>Endereço:</strong>{address.address} - {address.numero}<br />
            <strong>Código Postal:</strong>{address.postalCode}<br />
            <strong>Bairro:</strong> {address.bairro}<br />
            <strong>Cidade:</strong> {address.city}<br />
            <strong>Estado:</strong> {address.state}
          </p>
          <button onClick={selectAddress}>Escolher</button>

        </div>
      )}
    </div>
  );
}