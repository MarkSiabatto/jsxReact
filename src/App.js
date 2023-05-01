import React from "react";
import ProfileCard from "./components/ProfileCard";
import AlexaImg from "./assets/alexa.png";
import CortanaImg from "./assets/cortana.png";
import SiriImg from "./assets/siri.png";

const App = () => {
  const PDAS = {
    Alexa: {
      Title: "Amazon Alexa",
      Handle: "@alexaamazon",
      Image: AlexaImg,
    },
    Siri: {
      Title: "Siri",
      Handle: "@applesiri",
      Image: SiriImg,
    },
    Cortana: {
      Title: "MS Cortana",
      Handle: "@MSCortana",
      Image: CortanaImg,
    },
  };

  return (
    <div>
      <h1>PDA's</h1>
      <ProfileCard
        title={PDAS.Alexa.Title}
        handle={PDAS.Alexa.Handle}
        image={PDAS.Alexa.Image}
      />
      <ProfileCard
        title={PDAS.Cortana.Title}
        handle={PDAS.Cortana.Handle}
        image={PDAS.Cortana.Image}
      />
      <ProfileCard
        title={PDAS.Siri.Title}
        handle={PDAS.Siri.Handle}
        image={PDAS.Siri.Image}
      />
    </div>
  );
};

export default App;
