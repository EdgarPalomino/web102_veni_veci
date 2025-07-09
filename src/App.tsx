import { useState, useEffect } from "react";
import "./App.css"

interface ComposerInformation {
  composerID: string;
  name: string;
  picture: string;
  era: string;
  active: boolean;
}

const App = () => {

  const [bannedAttributes, setBannedAttributes] = useState<string[]>([]);
  const [seenComposers, setSeenComposers] = useState<ComposerInformation[]>([]);
  const [currentComposer, setCurrentComposer] = useState<ComposerInformation>({composerID: "", name: "", picture: "", era: "", active: true});

  const addBannedAttribute = async (attribute: string) => {

    if (bannedAttributes.includes(attribute) == false) {
      setBannedAttributes((bannedAttributes) => ([...bannedAttributes, attribute]));
    }

    await getRandomComposer();

  };

  const getRandomComposer = async () => {

    let randomCharacter = Math.floor(Math.random()*26);
    let randomLetter = String.fromCharCode("a".charCodeAt(0)+randomCharacter);

    while (randomLetter == "q") {
      randomCharacter = Math.floor(Math.random()*26);
      randomLetter = String.fromCharCode("a".charCodeAt(0)+randomCharacter);
    }

    const composerRequest = await fetch(`https://api.openopus.org/composer/list/name/${randomLetter}.json`);
    const composerData = await composerRequest.json();

    let randomComposer = Math.floor(Math.random()*composerData.composers.length);

    while (seenComposers.some((composer) => (composer.composerID == composerData.composers[randomComposer])) || checkBannedAttributes(composerData.composers[randomComposer]) == false) {
      randomComposer = Math.floor(Math.random()*composerData.composers.length);
    }

    const nextComposer = {
      composerID: composerData.composers[randomComposer].id,
      name: composerData.composers[randomComposer].complete_name,
      picture: composerData.composers[randomComposer].portrait,
      era: composerData.composers[randomComposer].epoch,
      active: composerData.composers[randomComposer].death == null ? true : false
    };

    setSeenComposers((seenComposers) => ([...seenComposers, nextComposer]))
    setCurrentComposer(nextComposer)
    
  };

  const checkBannedAttributes = (composerJSON: any) => {

    if (bannedAttributes.includes(composerJSON.complete_name) || bannedAttributes.includes(composerJSON.epoch)) {
      return false;
    }

    if (composerJSON.death == null && bannedAttributes.includes("Not Active")) {
      return false;
    }

    if (composerJSON.death != null && bannedAttributes.includes("Active")) {
      return false;
    }

    return true;

  }

  useEffect(() => {
    getRandomComposer();
  }, []);

  return (
    <div className="App">
      <div className="seen-composers">
        <h3> Seen Composers: </h3>
        {seenComposers.map((composer) => (
          <div>
            <img src={composer.picture} />
            <p> {composer.name} </p>
          </div>
        ))}
      </div>
      <div className="current-composer">
        <img src={currentComposer.picture} />
        <div className="composer-attributes">
          <div className="attribute-button">
            <p> Name: </p>
            <button onClick={() => {addBannedAttribute(currentComposer.name)}}> {currentComposer.name} </button>
          </div>
          <div className="attribute-button">
            <p> Era: </p>
            <button onClick={() => {addBannedAttribute(currentComposer.era)}}> {currentComposer.era} </button>
          </div>
          <div className="attribute-button">
            <p> Active: </p>
            <button onClick={() => {addBannedAttribute(currentComposer.active == true ? "Active" : "Not Active")}}> {currentComposer.active == true ? "✔️" : "❌"} </button>
          </div>
        </div>
      </div>
      <div className="banned-attributes">
        <h3> Banned Attributes: </h3>
        {bannedAttributes.map((attribute) => (
          <p> {attribute} </p>
        ))}
      </div>
    </div>
  );

};

export default App;
