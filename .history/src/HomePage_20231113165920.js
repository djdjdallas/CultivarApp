import React from "react";
import clone from "./assets/clone.jpg";
import seed from "./assets/seed.jpg";
import pollen from "./assets/pollens.jpg";

function HomePage() {
  return (
    <div className="bg-[#F8F9FA]">
      <h1>Cultivar</h1>
      <div className="flex flex-row justify-center align-middle h-46 gap-3">
        <div className="flex flex-col">
          <img src={clone} alt="clones" height={200} width={192} />
          <button className="w-48 h-14 bg-slate-500">Clones</button>
        </div>
        <div className="flex flex-col">
          <img src={seed} alt="clones" height={200} width={192} />
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
