import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Cultivar</h1>
      <div className="flex flex-row justify-center align-middle h-46 gap-3">
        <button className="w-32 h-32 bg-slate-500">Seeds</button>
        <button className="w-32 h-32 bg-slate-500">Clones</button>
        <button className="w-32 h-32 bg-slate-500">Pollen</button>
      </div>
    </div>
  );
}

export default HomePage;
