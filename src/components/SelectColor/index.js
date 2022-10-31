import './SelectColor.css';
import { BsBrush } from 'react-icons/bs'; 

const SelectColor = ({ cor, alteraCor }) => {
    return (
        <label
            className='label-cor'
        >
            <BsBrush size={25} />
            <input
                type='color'
                className='input-cor'
                value={cor}
                onChange={alteraCor}
            />
        </label>
    );
}

export default SelectColor;
