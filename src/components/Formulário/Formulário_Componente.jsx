import React from 'react';
import Btn_Container from './Btn_Container';
import Dados_Pessoais from './Dados_Pessoais';

import { Meu_Provider } from './Formulário_Context';
import Teste from './Teste';

const Formulário_Componente = () => {
    return (
        <Meu_Provider>
            {/* adcionar componentes do formulário aqui ⬇ */}
            <div>
                <Dados_Pessoais />
            </div>
        </Meu_Provider>
    );
};

export default Formulário_Componente;
