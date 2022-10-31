import './Time.css';
import hexToRgba from 'hex-to-rgba';
import Card from '../Card';
import SelectColor from '../SelectColor';

const Time = ({ 
    time, 
    colaboradores, 
    aoDeletar, 
    aoMudarCor,
    aoFavoritar
}) => {
    const cssSection = {
        backgroundColor: hexToRgba(time.cor, 0.3),
    };
    
    const cssH3 = {
        borderBottomColor: time.cor,
    }

    const alteraCor = e => {
        aoMudarCor(time.id, e.target.value);
    }

    return (
        (colaboradores.length > 0) ?
            <section
                className='time'
                style={cssSection}
            >   
                <div className='selecionaCor'>
                    <SelectColor 
                        cor={time.cor}
                        alteraCor={alteraCor}
                    />
                </div>
                <h3 style={cssH3}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(
                        (colaborador, index) => {
                            return (
                                <Card
                                    key={index}
                                    colaborador={colaborador}
                                    cor={time.cor}
                                    aoDeletar={aoDeletar}
                                    aoFavoritar={aoFavoritar}
                                />
                            );
                        }
                    )}
                </div>
            </section>
        : ''
    );
};

export default Time;
