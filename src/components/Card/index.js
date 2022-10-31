import { 
    AiFillCloseCircle,
    AiFillStar,
    AiOutlineStar
} from 'react-icons/ai';
import './Card.css';

const Card = ({ 
    colaborador,
    cor, 
    aoDeletar,
    aoFavoritar
}) => {
    const cssCabecalho = {
        backgroundColor: cor,
    }

    const favoritou = () => {
        aoFavoritar(colaborador.id);
    }

    return (
        <div className='card'>
            <AiFillCloseCircle size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div
                className='cabecalho'
                style={cssCabecalho}
            >
                <img 
                    src={colaborador.imagem}
                    alt={colaborador.nome}
                />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
            <div 
                className='favoritar'
                onClick={favoritou}
            >
                {colaborador.favorito
                    ? <AiFillStar 
                        color={'#DAA520'}
                        size={25}
                    />
                    : <AiOutlineStar
                        size={25}
                    />
                }
            </div>
        </div>
    ); 
}

export default Card;
