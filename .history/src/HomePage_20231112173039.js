import React from "react";

function HomePage() {
  return (
    <div>
      <button>Login</button>
      <button>Register</button>
      <h1>Cultivar</h1>
      <div className="flex-row justify-center align-middle h-96">
        <button className="w-30 h-52">Seeds</button>
        <button className="w-30 h-52">Clones</button>
        <button className="w-30 h-52">Pollen</button>
      </div>
    </div>
  );
}

export default HomePage;
