import React, { useContext, useEffect, useState, useRef } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import firebase from 'firebase';
import { getFirestore } from '../../firebase/firebase';
import { Input, Button, Label, FormFeedback, FormGroup, Form, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BuyForm.css';
import { Typography } from '@material-ui/core';

const BuyForm = () => {

    const { sumItems, cart, sumTotalPrice, removeCart } = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderId, setOrderId] = useState("");
    const [booleanFlag, setBooleanFlag] = useState(false);


    const nameRef = useRef();
    const [nameBool, setNameBool] = useState(false);

    const addressRef = useRef();
    const [addressBool, setAddressBool] = useState(false);

    const cityRef = useRef();
    const [cityBool, setCityBool] = useState(false);

    const stateRef = useRef();
    const [stateBool, setStateBool] = useState(false);

    const emailRef = useRef();
    const [emailBool, setEmailBool] = useState(false);

    const mobileRef = useRef();
    const [mobileBool, setMobileBool] = useState(false);

    useEffect(() => {
        setTotalPrice(sumTotalPrice());
    })

    const validate = (values, state) => {

        if (values.current.value == "") {
            return state(true);
        } else {
            state(false)
        }
    };


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



        if ((nameRef.current.value != "") && (addressRef.current.value != "") && (cityRef.current.value != "") && (stateRef.current.value != "") && (emailRef.current.value != "") && (mobileRef.current.value != "")) {
            orders.add(setOrder)
                .then(({ id }) => {
                    console.log('orden ingresada:' + id);
                    setOrderId(id);
                    console.log(orderId);
                    setBooleanFlag(false);
                    setNameBool(false);
                    setAddressBool(false);
                    setCityBool(false);
                    setStateBool(false);
                    setEmailBool(false);
                    setMobileBool(false);
                })
                .catch((err) => {
                    console.log('el error fue el siguiente: ' + err);
                });
        } else {
            setBooleanFlag(true);
            validate(nameRef, setNameBool);
            validate(addressRef, setAddressBool);
            validate(cityRef, setCityBool);
            validate(stateRef, setStateBool);
            validate(emailRef, setEmailBool);
            validate(mobileRef, setMobileBool);

        }
    };



    return (
        <div className='buyFormContainer'>
            {cart.length > 0 ?
                <>
                    {orderId && (<h1>Felicitaciones el ID de su compra es: {orderId}</h1>)}
                    <div className='divTypoForm'>
                        <Typography variant='h4' align='center' >
                            Cantidad de productos: {sumItems}
                        </Typography>
                        <Typography variant='h4' align='center' >
                            Valor total de: ${totalPrice}
                        </Typography>
                    </div>
                    <Form className='formContainer'>
                        <FormGroup>
                            <Label for='name'>
                                Escriba su nombre:
                            </Label>
                            <Input
                                type="text"
                                innerRef={nameRef}
                                name='name'
                                placeholder="Nombre y apellido"
                            />
                            {(nameBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for='direccion'>
                                Escriba su direccion:
                            </Label>
                            <Input
                                type='text'
                                name='direccion'
                                innerRef={addressRef}
                                placeholder="Direccion"
                            />
                            {(addressBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for='ciudad'>
                                Escriba la ciudad:
                            </Label>
                            <Input
                                type='text'
                                name='ciudad'
                                innerRef={cityRef}
                                placeholder="Ciudad"
                            />
                            {(cityBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for='provincia'>
                                Escriba su provincia:
                            </Label>
                            <Input
                                type='text'
                                name='provincia'
                                innerRef={stateRef}
                                placeholder="Provincia"
                            />
                            {(stateBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for='e-mail'>
                                Escriba su e-mail:
                            </Label>
                            <Input
                                type='text'
                                name='email'
                                innerRef={emailRef}
                                placeholder="E-Mail"
                            />
                            {(emailBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for='numero de celular'>
                                Escriba su numero de celular:
                            </Label>
                            <Input
                                type='text'
                                name='mobile'
                                innerRef={mobileRef}
                                placeholder="Numero de celular"
                            />
                            {(mobileBool == true) ?
                                <Typography variant='p' color='error' >
                                    El casillero debe estar completo.
                                </Typography>
                                :
                                null
                            }
                        </FormGroup>
                        <Button className='paymentButton' variant="contained" color="primary" onClick={() => paymentButton()} >
                            Comprar
                        </Button>
                        {(booleanFlag == true) ?
                            <Typography variant='p' color='error' >
                                Complete el formulario por favor!
                            </Typography>
                            :
                            null
                        }
                    </Form>
                </>
                :
                <div className='errorPage'>
                    <Typography variant='h3' align='center'>
                        Error 404! Page not found
                    </Typography>
                </div>
            }
        </div >
    )
}

export default BuyForm