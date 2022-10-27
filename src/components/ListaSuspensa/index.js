import './ListaSuspensa.css';

const ListaSuspensa = props => {
    const options = props.itens.map(
        item => <option key={item}>{item}</option>
    );

    const aoSelecionar = e => {
        props.aoAlterar(e.target.value);
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                required={props.obrigatorio}
                value={props.valor}
                onChange={aoSelecionar}
            >
                {options}
            </select>
        </div>
    );
};

export default ListaSuspensa;
