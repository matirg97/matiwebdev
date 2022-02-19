import React, { useContext, useEffect, useState, useRef } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import firebase from 'firebase';
import { getFirestore } from '../../firebase/firebase';
import { Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BuyForm.css';

const BuyForm = () => {

    const { sumItems, cart, sumTotalPrice } = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderId, setOrderId] = useState("");

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();


    useEffect(() => {
        setTotalPrice(sumTotalPrice());
    })

    function paymentButton() {
        const db = getFirestore();
        const orders = db.collection('orders');

        const setOrder = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: totalPrice,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };

        console.log(nameRef.current.value);

        orders.add(setOrder)
            .then(({ id }) => {
                console.log('orden ingresada:' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log('el error fue el siguiente: ' + err);
            });

        return (
            <div>
                {orderId && (<h1>Felicitaciones el ID de su compra es: {orderId}</h1>)}
            </div>
        );

    };



    return (
        <div className='buyFormContainer'>
            {cart.length > 0 ?
                <>
                    <h2>
                        Cantidad de productos: {sumItems}, por un valor total de: {totalPrice}
                    </h2>
                    <form>
                        <Input type="text" innerRef={nameRef} name='name' placeholder="Nombre y apellido" />
                        <br />
                        <Input type='text' name='direccion' innerRef={addressRef} placeholder="Direccion" />
                        <br />
                        <Input type='text' name='ciudad' innerRef={cityRef} placeholder="Ciudad" />
                        <br />
                        <Input type='text' name='provincia' innerRef={stateRef} placeholder="Provincia" />
                        <br />
                        <Input type='text' name='email' innerRef={emailRef} placeholder="E-Mail" />
                        <br />
                        <Input type='text' name='mobile' innerRef={mobileRef} placeholder="Numero de celular" />
                    </form>
                    <Button variant="contained" color="primary" onClick={() => paymentButton()} >
                        Comprar
                    </Button>
                </>
                :
                <div>Error!</div>
            }
        </div>
    )
}

export default BuyForm