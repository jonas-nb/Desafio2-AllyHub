import React, { useContext } from 'react';
import { Form_Store } from './Formulário_Context';
import { Button } from '@mui/material';

const Btn_Enviar = () => {
    let {
        setTeste,
        teste,
        setValida_Nome_State,
        setValida_Email_State,
        setValida_Telefone_State,
        setValida_CPF_State,
        setValida_Cidade_State,
        setValida_Pais_State,
    } = useContext(Form_Store);
    console.log(teste);
    return (
        <div>
            <button onClick={() => setTeste(teste === false ? true : false)}>
                Enviar
            </button>
        </div>
    );
};

export default Btn_Enviar;
