import React from "react";
import clones from "./assets/clones.jpg";
function HomePage() {
  return (
    <div>
      <h1>Cultivar</h1>
      <div className="flex flex-row justify-center align-middle h-46 gap-3">
        <div className="flex flex-col">
          <img src={clones} alt="clones" height={200} width={200} />
          <button className="w-32 h-32 bg-slate-500">Clones</button>
        </div>
        <button className="w-32 h-32 bg-slate-500">Seeds</button>

        <button className="w-32 h-32 bg-slate-500">Pollen</button>
      </div>
    </div>
  );
}

export default HomePage;
