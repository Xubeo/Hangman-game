//import react from "react";
import { useEffect, useState } from "react";
import Words from "./Words";

const GOOD_LETTER = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéàè"
function CallApi() {
    const [word, setword] = useState(undefined);
    useEffect(()=> {
        (async () => {
            const {data} = await getWord();
            setword(data);
        })();
        return () => {};  
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
        return <p>waiting</p>;
    };
    
        return (
            <div>
                {console.log(word.word)}
                <Words word={word.word}></Words>
            </div>
        );
}

export default CallApi;