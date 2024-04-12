import React from "react";
import Robot from "../assets/robot.jpg";
import Dinosaurio from "../assets/dinosaurio.jpg";
import Batman from "../assets/batman.jpeg";
import Pistola from "../assets/pistola.jpg";

function Card() {
  return (
    <div >
      <div className="card">
        <img src={Robot} alt="Robot a control remoto" />
        <div className="card-body">
          <h4 className="card-title">Robot</h4>
          <p className="card-text text-secondary">
            Robot a control remoto
          </p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Pistola} alt="Pistola de juguete" />
        <div className="card-body">
          <h4 className="card-title">Revolver</h4>
          <p className="card-text text-secondary">Revolver de juguete, balines</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Batman} alt="Batman de juguete" />
        <div className="card-body">
          <h4 className="card-title">Batman</h4>
          <p className="card-text text-secondary">Batman de juguete Lego</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Dinosaurio} alt="Dinosaurio de juguete" />
        <div className="card-body">
          <h4 className="card-title">Dinosaurio</h4>
          <p className="card-text text-secondary">T-rex de juguete</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
