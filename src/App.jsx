import React from 'react';
import Formulário_Componente from './components/Formulário/Formulário_Componente';
import Componente_Header from './components/Header/Header_Componente';

const App = () => {
    return (
        <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-300 w-full h-full">
            <Componente_Header />
            <Formulário_Componente />
        </div>
    );
};

export default App;
