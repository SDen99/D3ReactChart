import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider } from "react-dims";
import { shuffle } from "d3-array";

import One from "./CodeSandBox/01";
import Two from "./CodeSandBox/02";
import Three from "./CodeSandBox/03";
import Four from "./CodeSandBox/04";
import Five from "./CodeSandBox/05";
import Six from "./CodeSandBox/06";
import Seven from "./CodeSandBox/07";
import Eight from "./CodeSandBox/08";
import Nine from "./CodeSandBox/09";
import Ten from "./CodeSandBox/10";
import Eleven from "./CodeSandBox/11";
import Twelve from "./CodeSandBox/12";
import Thirteen from "./CodeSandBox/13";

const App1 = () => {
  return (
    <div className="myLayout">
      <div className="coolThing">
        <One />
        {/* hello I am a comment*/}
      </div>
    </div>
  );
};

const App2 = () => {
  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <Two />
        </Provider>
      </div>
    </div>
  );
};

const App3 = () => {
  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <Three />
        </Provider>
      </div>
    </div>
  );
};

const App4 = () => {
  const data = [4, 3, 7, 2, 2, 2, 2, 7, 3, 4];
  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <Four data={data} />
        </Provider>
      </div>
    </div>
  );
};

const App5 = () => {
  const data = [4, 3, 7, 2, 2, 2, 2, 7, 3, 4];
  return (
    <div className="myLayout">
      <div className="coolThing">
        <Provider>
          <Five data={data} />
        </Provider>
      </div>
    </div>
  );
};

const App6 = () => {
  const data = [4, 3, 7, 2, 2, 2, 2, 7, 3, 4];
  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        All elements present, but chart not responsive yet.
      </div>
      <div className="coolThing">
        <Provider>
          <Six data={data} />
        </Provider>
      </div>
    </div>
  );
};

const App7 = () => {
  const data = [4, 3, 7, 2, 2, 2, 2, 7, 3, 4];
  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        it works!
      </div>
      <div className="coolThing">
        <Provider>
          <Seven data={data} />
        </Provider>
      </div>
    </div>
  );
};

const App8 = () => {
  const [data, setData] = useState([]);

  const generateData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.round(Math.random() * 10));
    }
    setData(arr);
  };

  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={generateData}>update data</button>
      </div>
      <div className="coolThing">
        <Provider>
          <Eight data={data} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

const App9 = () => {
  const [data, setData] = useState([]);

  const generateData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.round(Math.random() * 10));
    }
    setData(arr);
  };

  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={generateData}>update data</button>
      </div>
      <div className="coolThing">
        <Provider>
          <Nine data={data} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

const App10 = () => {
  const [data, setData] = useState([]);

  const generateData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.round(Math.random() * 10));
    }
    setData(arr);
  };

  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={generateData}>update data</button>
      </div>
      <div className="coolThing">
        <Provider>
          <Ten data={data} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

const App11 = () => {
  const [players, setPlayers] = useState([]);
  const [cut, setCut] = useState([]);

  const rand = (min, max) => {
    return min + Math.round(Math.random() * max);
  };

  const createPlayer = id => {
    return {
      id: id,
      ego: rand(5, 10),
      x: rand(2, 98),
      y: rand(2, 48)
    };
  };

  const updatePlayers = () => {
    if (players.length === 11) {
      setCut(players.splice(rand(1, 5), rand(1, 5)));
    } else {
      cut.forEach(p => players.push(p));
    }
    let temp = players.map(d => createPlayer(d.id));
    shuffle(temp);
    setPlayers(temp);
  };

  useEffect(() => {
    let init = [];
    for (let i = 0; i < 11; i++) {
      init.push(createPlayer(i + 1));
    }
    setPlayers(init);
  }, []);

  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={updatePlayers}>update players</button>
      </div>
      <div className="coolThing">
        <Provider>
          <Eleven data={players} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

const App12 = () => {
  const [data, setData] = useState([]);

  const generateData = () => {
    const arr = "abcdefghijklmnopqrstuvwxyz".split("");
    const newArr = arr.map((d, i) => {
      return { letter: d, id: i };
    });
    shuffle(newArr);
    const slicedAndDiced = newArr.slice(Math.floor(Math.random() * 26));
    setData(slicedAndDiced);
  };

  useEffect(() => generateData(), []);

  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={generateData}>update data</button>
      </div>
      <div className="coolThing">
        <Provider>
          <Twelve data={data} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

const App13 = () => {
  const [data, setData] = useState([]);
  const [mapping, toggleMapping] = useState(false);

  const generateData = () => {
    const arr = "abcdefghijklmnopqrstuvwxyz".split("");
    const newArr = arr.map((d, i) => {
      return { letter: d, id: i };
    });
    shuffle(newArr);
    const slicedAndDiced = newArr.slice(Math.floor(Math.random() * 26));
    setData(slicedAndDiced);
  };

  useEffect(() => generateData(), []);
  return (
    <div className="myLayout">
      <div
        style={{
          gridArea: "1/2/2/4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={generateData}>update data</button>

        <div
          style={{
            backgroundColor: "green",
            display: "grid",
            textAlign: "center"
          }}
        >
          {`${mapping}`}
          <button onClick={() => toggleMapping(!mapping)}>
            data object constancy
          </button>
        </div>
      </div>
      <div className="coolThing">
        <Provider>
          <Thirteen data={data} mapping={mapping} />
        </Provider>
      </div>
    </div>
  );
};

//***********************************

export default App11;
