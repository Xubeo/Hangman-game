import React, {useState, useEffect} from 'react'
import '../App.css';

function Ranking() {
    const [rank, setRank] = useState(undefined);
    useEffect(() => {
        (async () => {
            const { data } = await getRank();
            setRank(data);
        })();
        return () => { };
    }, []);

    const getRank = async () => {
        const dataJson = await fetch("https://animalfinderapi.herokuapp.com/score");
        return await dataJson.json();
    };

    if (!rank) {
        return <p>en attente du score</p>;
    };
    return (
        /*<div>
            {console.log(rank)}
            {rank.map((el)=> {
                return (
                        <span>
                            <img className="avatar" src={`https://avatars.dicebear.com/api/adventurer-neutral/${el.username}.svg`}></img>
                            <p>{el.username}</p>
                            <p>Score : {el.score}</p>
                        </span>
                )
            })}
        </div>*/
        <p>En attente du score... (bon en vrai y'a pas d'attente, en regardant le code<br></br> vous pouvez voir une tentative d'affichage en commentaire qui affiche certains scores mais ça casse une partie du code :c)</p>
    )
}

export default Ranking;