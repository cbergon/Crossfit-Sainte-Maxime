import React from "react";
import { useNavigate } from "react-router-dom";

function BienEtre() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="heading-1">Bien-être</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/")}>
          Go to Home
        </button>
        <button type="button" onClick={() => navigate("/crossfit")}>
          Go to Crossfit
        </button>
      </div>
    </div>
  );
}

export default BienEtre;
