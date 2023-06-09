import "./App.css";
import Person from "./components/Person";
import PersonSelector from "./components/PersonSelector";
import { useState } from "react";

const BARBERS = ["Lukas", "Artur", "Daniel", "Honza"];
const BARBER_SERVICES = [
  "Klasické stříhání",
  "Úprava vousů",
  "Stříhání strojkem",
  "Klasické stříhání s úpravou vousů",
  "Stříhání strojkem s úpravou vousů",
  "Tradiční holení",
];
const BARBER_SERVICES_PRICES = [550, 390, 390, 890, 690, 450];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const showFirstPerson = () => {
    setIsVisible(!isVisible);
  };

  const showSecondPerson = () => {
    setIsVisible2(!isVisible2);
  };

  const showThirdPerson = () => {
    setIsVisible3(!isVisible3);
  };

  const showFourthPerson = () => {
    setIsVisible4(!isVisible4);
  };

  return (
    <div>
      <PersonSelector
        onClickFirst={showFirstPerson}
        onClickSecond={showSecondPerson}
        onClickThird={showThirdPerson}
        onClickFourth={showFourthPerson}
        barbers={BARBERS}
      />
      {isVisible && (
        <Person
          prices={BARBER_SERVICES_PRICES}
          services={BARBER_SERVICES}
          barbers={BARBERS[0]}
        />
      )}
      {isVisible2 && (
        <Person
          prices={BARBER_SERVICES_PRICES}
          services={BARBER_SERVICES}
          barbers={BARBERS[1]}
        />
      )}

      {isVisible3 && (
        <Person
          prices={BARBER_SERVICES_PRICES}
          services={BARBER_SERVICES}
          barbers={BARBERS[2]}
        />
      )}

      {isVisible4 && (
        <Person
          prices={BARBER_SERVICES_PRICES}
          services={BARBER_SERVICES}
          barbers={BARBERS[3]}
        />
      )}
    </div>
  );
}

export default App;
