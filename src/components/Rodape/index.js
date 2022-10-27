import './Footer.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imgs/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imgs/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imgs/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>

            <img className='logo' src='./imgs/logo.png' alt='logo' />

            <p>Desenvolvido por Alura.</p>
        </footer>
    );
};

export default Rodape;
