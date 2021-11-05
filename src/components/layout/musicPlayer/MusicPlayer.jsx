import React, { useState} from 'react';
import "./MusicPlayer.css";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const MusicPlayer = () => {

    const [play, setPlay] = useState(false);
    const [icon, setIcon] = useState("play");

    const [playlist] = useState
        (
            [
                "https://drive.google.com/uc?export=view&id=1ASOgAjU9OzP_Oiwz2Yh0BCabE9vcSHTc",
                "https://drive.google.com/uc?export=view&id=1-lI9J8F7zb54_URHOkqsm0G8o2uNnAP-",
                "https://drive.google.com/uc?export=view&id=10cZdKvPcu7O8TJXddm7gMyt_GiJ-SQWg",
                "https://drive.google.com/uc?export=view&id=1twEDuZqFFs_NZrFiqGBF_pGxCKPnHMHK",
                "https://drive.google.com/uc?export=view&id=1-lI9J8F7zb54_URHOkqsm0G8o2uNnAP-"

            ]
        )

    let index = 0;

    var player = document.getElementById("myPlayer");

    const handleClick = () => {
        setPlay(!play);
        if (play) {
            setIcon("play");
            player.pause();
        } else {
            setIcon("pause");
            player.play();
        }
    }

    const handleBackClick = () => {
        player.pause();
        if (index > (playlist.length - 1)) {
            index -= 1;
            player.src = playlist[index];
        } else {
            index = 0;
            player.src = playlist[index];
        }
        player.play();
    }

    const handleNextClick = () => {
        player.pause();
        if (index < (playlist.length - 1)) {
            index += 1;
            player.src = playlist[index];
        } else {
            index = 0;
            player.src = playlist[index];
        }
        player.play();
    }

    return (
        <div id="playerContainer" className="Player">
            <audio id="myPlayer"><source src={playlist[index]} /></audio>
            <Button.Group color="black">
                <Button labelPosition='right' onClick={handleBackClick} icon='backward' />
                <Button icon={icon} onClick={handleClick} />
                <Button labelPosition='left' onClick={handleNextClick} icon='forward' />
            </Button.Group>
        </div>
    )
}
export default MusicPlayer;
