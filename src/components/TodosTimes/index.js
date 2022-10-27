import Time from '../Time';
import './TodosTimes.css';

const TodosTimes = props => {
    const seleciona = time => {
        return props.colaboradores.filter
            (
                colaborador => 
                    colaborador.time === time.nome
            )
        ;
    };

    return (
        <section>
            {
                props.times.map(time => 
                    <Time 
                        nome={time.nome}
                        key={time.nome}
                        corPrimaria={time.corPrimaria}
                        corSecundaria={time.corSecundaria}
                        colaboradores={
                            seleciona(time)
                        }
                    ></Time>
                )
            }
        </section>
    );
}

export default TodosTimes;
