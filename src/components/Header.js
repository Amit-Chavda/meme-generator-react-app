import trollFace from '../images/TrollFace.png';
import '../styles/Header.css';

export default function Header(props) {

    return (
        <header className={props.darkMode ? "header-dark" : "header"}>
            <img src={trollFace} />
            <h2>Meme Generator</h2>
            <h3>React App</h3>

            <input
                type="checkbox"
                className="checkbox"
                name="theme"
                onChange={props.toggleDarkMode}
            />
            <label for="switch" class="toggle"><h3>Dark</h3></label>
        </header>
    )
}   