//import react from "react";
import { useEffect, useState } from "react";

const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";
const correct_letter = [];
function CallApi() {
    const [word, setword] = useState(undefined);
    useEffect(() => {
        (async () => {
            const { data } = await getWord();
            setword(data);
        })();
        return () => { };
    }, []);

    const handleKeyDown = (event) => {
        if (GOOD_LETTER.includes(event.key)) {
            console.log("A key was pressed", event.key);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const getWord = async () => {
        const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
        return await dataJson.json();
    };

    if (!word) {
        return <p>en attente du mot</p>;
    };

    return (
        <div className="word">
            {console.log(word.word)}
            {word.word.split('').map( (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correct_letter.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    );
}

export default CallApi;