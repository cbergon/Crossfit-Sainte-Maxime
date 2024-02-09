import React from "react";
import { useNavigate } from "react-router-dom";

function Crossfit() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="heading-1">Crossfit</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/")}>
          Go to Home
        </button>
        <button type="button" onClick={() => navigate("/bien-etre")}>
          Go to Bien-être
        </button>
      </div>
    </div>
  );
}

export default Crossfit;
