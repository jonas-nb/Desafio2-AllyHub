import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

const Dados_Pessoais = () => {
    useEffect(() => {
        País_API();
        Chama_cidade();
    }, []);

    let [Pais_Response_API, setPais_Response_API] = useState([]);
    let [Nome_Pais_Code, setNome_Pais_Code] = useState('[]');
    let [Pais_Option, setPais_Option] = useState('');

    let [stateLoading, setStateLoading] = useState(false);
    async function País_API() {
        setStateLoading(true);
        const response = await axios.get(
            'https://amazon-api.sellead.com/country'
        );
        setPais_Response_API(
            (Pais_Response_API = await response.data.map(
                ({ name, code }) => `${name}, ${code}`
            ))
        );

        console.log(Pais_Response_API);
        console.log(Nome_Pais_Code);
        setStateLoading(false);
    }

    function inverte(string) {
        let saída = '';

        for (let i = string.length - 1; i >= 0; i--) {
            saída += string[i];
        }

        return saída;
    }

    async function Chama_cidade() {
        let str = inverte(Pais_Option);
        str = str.substring(0, 2);
        str = inverte(str);
        console.log(str);
        const response2 = await axios.get(
            'https://amazon-api.sellead.com/city'
        );

        setNome_Pais_Code(
            (Nome_Pais_Code = response2.data.filter((value) => value === str))
        );
    }

    console.log(Nome_Pais_Code);

    return (
        <div>
            <h1>Dados Pessoais</h1>
            <form>
                <div className="flex flex-col">
                    <label htmlFor="nome">Digite Seu Nome</label>

                    <input
                        required
                        id="nome"
                        type="text"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                        placeholder="ex: Lebron James Filho"
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="email" className="">
                        Digite um email para contato
                    </label>

                    <input
                        required
                        id="email"
                        type="email"
                        placeholder="ex: exemple@gmail.com"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="telefone" className="">
                        Digite um telefone para contato
                    </label>
                    <input
                        required
                        type="text"
                        pattern="\d*"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                        minLength={10}
                        maxLength={11}
                        placeholder="21982143587"
                    />
                    <p className="italic">Este campo recebe apenas números</p>
                </div>
                <div className="flex flex-col ">
                    <label
                        htmlFor="nome"
                        className="focus:border focus:outline-none placeholder:italic"
                    >
                        Digite o número do CPF
                    </label>

                    <input
                        required
                        type="text"
                        pattern="\d*"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                        minLength={11}
                        maxLength={11}
                        placeholder="70357256441"
                    />
                    <p>Este campo recebe apenas números</p>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nome">Digite seu país de origem</label>

                    <input
                        required
                        id="nome"
                        type="text"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                        placeholder="Brasil"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nome">Digite sua cidade de origem</label>

                    <input
                        required
                        id="nome"
                        type="text"
                        className="placeholder:text-black p-2 focus:border focus:outline-1 focus:outline-purple-100 placeholder:italic invalid:bg-red-100"
                        placeholder="Bahia"
                    />
                </div>
                <select onChange={(e) => setPais_Option(e.target.value)}>
                    <optgroup label="País">
                        {stateLoading === true ? (
                            <option>aguarde</option>
                        ) : (
                            Pais_Response_API.map((value, i) => (
                                <option key={i} id="op">
                                    {value}
                                </option>
                            ))
                        )}
                    </optgroup>
                </select>

                <button>envia</button>
            </form>
        </div>
    );
};

export default Dados_Pessoais;
