import React from "react";
import clones from "./assets/clones.jpg";
import seeds from "./assets/seeds.jpg";
import pollen from "./assets/pollen.jpg";

function HomePage() {
  return (
    <div>
      <h1>Cultivar</h1>
      <div className="flex flex-row justify-center align-middle h-46 gap-3">
        <div className="flex flex-col">
          <img src={clones} alt="clones" height={200} width={192} />
          <button className="w-48 h-14 bg-slate-500">Clones</button>
        </div>
        <div className="flex flex-col">
          <img src={seeds} alt="clones" height={200} width={192} />
          <button className="w-48 h-14 bg-slate-500">Seeds</button>
        </div>
        <div className="flex flex-col">
          <img src={pollen} alt="clones" height={200} width={192} />
          <button className="w-48 h-14 bg-slate-500">Pollen</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
