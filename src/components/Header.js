import trollFace from '../images/TrollFace.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} />
            <h2>Meme Generator</h2>
            <h3>React App</h3>
        </header>
    )
}   