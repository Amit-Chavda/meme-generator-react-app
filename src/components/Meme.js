import "../styles/Meme.css"
import MemeAdpter from "../adapters/MemeAdpter"
import { useState } from "react";
export default function Meme() {

    const [memeUrl, setMemeUrl] = useState("https://i.imgflip.com/9sw43.jpg");
    function changeMeme() {
        setMemeUrl(MemeAdpter[Math.floor(Math.random() * 99)].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text"
                    className="form-input"
                    placeholder="Top text" />
                <input type="text"
                    className="form-input"
                    placeholder="Bottom text" />
                <button className="form-button" onClick={changeMeme}>
                    Get a new meme image
                </button>
            </div>
            <img className="meme-image"
                src={memeUrl} />
        </main>
    )
}