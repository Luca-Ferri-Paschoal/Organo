import './TextField.css';

const TextField = props => {
    const aoDigitar = e => {
        props.aoAlterar(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                type="text"
                onChange={aoDigitar}
                value={props.valor}
                placeholder={props.placehoder}
                required={props.obrigatorio}
            />
        </div>
    );
};

export default TextField;
