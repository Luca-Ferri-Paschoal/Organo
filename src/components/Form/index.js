import { useState } from 'react';
import './Form.css';
import TextField from './../TextField';
import ListaSuspensa from './../ListaSuspensa';
import Botao from './../Botao';

const Form = props => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState(props.times[0]);

    const aoSalvar = e => {
        e.preventDefault();

        const colaborador = {
            nome,
            cargo,
            imagem,
            time,
        }

        setNome('');
        setCargo('');
        setImagem('');
        
        props.aoCadastrar(colaborador);
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true} 
                    label="Nome" 
                    placehoder="Digite o seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placehoder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"   
                    placehoder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true} 
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => {
                        setTime(valor);
                    }}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Form;
