import React from "react";
import Drum from "./Drum";
import { Container, Row, Col } from "react-bootstrap";

export default function Buttons({ keyPressed, className, setKeyPressed, setDrumId }) {
  const handleDrum = (sound) => {
    let audio = new Audio(sound);
    audio.play();
  };

  return (
    <Container fluid>
      <Row className={({ className }, "mx-auto")}>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter="Q"
            executeKey={81}
            id="purr-and-meow"
            sound={
              "https://cdn.pixabay.com/download/audio/2021/08/03/audio_cbf0f95ef8.mp3?fileid=cat-purring-and-meow-5928.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"W"}
            executeKey={87}
            id="normal-meow"
            sound={
              "https://cdn.pixabay.com/download/audio/2022/01/18/audio_4a7219f81f.mp3?fileid=cat-meow-14536.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"E"}
            executeKey={69}
            id="short-chirp"
            sound={
              "https://cdn.pixabay.com/download/audio/2021/09/14/audio_5901c5c7d0.mp3?fileid=cat-purr-meow-8327.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"A"}
            executeKey={65}
            id="sad-meow"
            sound={
              "https://quicksounds.com/uploads/tracks/707158906_1739637058_369004173.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"S"}
            executeKey={83}
            id="screaming-meow"
            sound={
              "https://quicksounds.com/uploads/tracks/377413383_844386555_1608622177.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"D"}
            executeKey={68}
            id="mew"
            sound={
              "https://quicksounds.com/uploads/tracks/1591201034_552990698_1002962572.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"Z"}
            executeKey={90}
            id="growl"
            sound={
              "https://quicksounds.com/uploads/tracks/514281102_745146916_445384173.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"X"}
            executeKey={88}
            id="long-growl"
            sound={
              "https://quicksounds.com/uploads/tracks/1817901723_842510242_1804088455.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
        <Col xs={4}>
          <Drum
            className="drum-pad"
            letter={"C"}
            executeKey={67}
            id="small-purr"
            sound={
              "https://quicksounds.com/uploads/tracks/1509602167_12847162_1703809237.mp3"
            }
            handleDrum={handleDrum}
            keyPressed={keyPressed}
            setKeyPressed={setKeyPressed}
            setDrumId={setDrumId}
          />
        </Col>
      </Row>
    </Container>
  );
}
