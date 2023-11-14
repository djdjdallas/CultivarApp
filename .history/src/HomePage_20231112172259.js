import React from "react";

function HomePage() {
  return (
    <div>
      <button>Login</button>
      <button>Register</button>
      <h1>Cultivar</h1>
      <div class="container">
        <button className="w-100 h-52">Seeds</button>
        <button className="w-100 h-52">Clones</button>
        <button className="w-100 h-52">Pollen</button>
      </div>
    </div>
  );
}

export default HomePage;
