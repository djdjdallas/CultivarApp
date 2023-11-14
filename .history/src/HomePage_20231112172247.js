import React from "react";

function HomePage() {
  return (
    <div>
      <button>Login</button>
      <button>Register</button>
      <h1>Cultivar</h1>
      <div class="container">
        <button className="w-100 h-52">Seeds</button>
        <button class="button">Clones</button>
        <button class="button">Pollen</button>
      </div>
    </div>
  );
}

export default HomePage;
