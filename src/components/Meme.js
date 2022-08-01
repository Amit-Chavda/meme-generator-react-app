import "../styles/Meme.css"
import { useState, useEffect } from "react";
import axios from "axios"

export default function Meme(props) {

    const [memeData, setMemeData] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/9sw43.jpg"
    })


    const [allMemes, setAllMemes] = useState([]);


    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => {
                setAllMemes(res.data)
            })
    }, []);

    console.log(allMemes)

    function changeMeme() {
        setMemeData((prevData) => {
            return {
                ...prevData,
                url: allMemes.data.memes[Math.floor(Math.random() * 99)].url
            }
        })
    }
    function handleOnChange(event) {
        setMemeData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className={props.darkMode ? "body-dark":"body"}>
            <main >
                <div className="form">
                    <input type="text"
                        className="form-input"
                        name="topText"
                        value={memeData.topText}
                        onChange={handleOnChange}
                        placeholder="Top text" />

                    <input type="text"
                        className="form-input"
                        name="bottomText"
                        value={memeData.bottomText}
                        onChange={handleOnChange}
                        placeholder="Bottom text" />
                    <button className="form-button" onClick={changeMeme}>
                        Get a new meme image
                    </button>
                </div>

                <div className="meme">
                    <img className="meme-image"
                        src={memeData.url} />
                    <h2 className="top-text">{memeData.topText}</h2>
                    <h2 className="bottom-text">{memeData.bottomText}</h2>
                </div>
            </main>
        </div>
    )
}