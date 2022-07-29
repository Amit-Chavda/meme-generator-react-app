import trollFace from '../images/transperent-troll.png';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} />
            <h2>Meme Generator</h2>
            <h4>React App</h4>
        </header>
    )
}   