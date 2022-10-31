import React, { useContext, useState } from 'react';
import { createContext } from 'react';

export const Form_Store = createContext();

export const Meu_Provider = ({ children }) => {
    /* Boolean : Estados para validação do formulário
    (true:validado // false:não validado) */
    let [Valida_Nome_State, setValida_Nome_State] = useState(true);
    let [Valida_Email_State, setValida_Email_State] = useState();
    let [Valida_Telefone_State, setValida_Telefone_State] = useState();
    let [Valida_CPF_State, setValida_CPF_State] = useState();
    let [Valida_Pais_State, setValida_Pais_State] = useState();
    let [Valida_Cidade_State, setValida_Cidade_State] = useState();
    console.log(Valida_Nome_State);

    let [teste, setTeste] = useState();
    return (
        <Form_Store.Provider
            value={{
                Valida_Nome_State,
                Valida_Telefone_State,
                Valida_CPF_State,
                Valida_Pais_State,
                Valida_Cidade_State,
                Valida_Email_State,

                teste,
                setTeste,

                setValida_Nome_State,
                setValida_Email_State,
                setValida_Telefone_State,
                setValida_CPF_State,
                setValida_Cidade_State,
                setValida_Pais_State,
            }}
        >
            {children}
        </Form_Store.Provider>
    );
};
