import Time from '../Time';
import './TodosTimes.css';

const TodosTimes = ({ 
    times, 
    colaboradores, 
    aoDeletar, 
    aoMudarCor,
    aoFavoritar
}) => {
    const seleciona = time => {
        return colaboradores.filter(
            colaborador => colaborador.time === time.nome
        );
    };

    return (
        <section>
            {
                times.map((time, index) => 
                    <Time 
                        key={index}
                        time={time}
                        colaboradores={
                            seleciona(time)
                        }
                        aoDeletar={aoDeletar}
                        aoMudarCor={aoMudarCor}
                        aoFavoritar={aoFavoritar}
                    ></Time>
                )
            }
        </section>
    );
}

export default TodosTimes;
