import React from "react";
import "./style.css";
import Timer from './Timer'; // Импортируйте компонент Timer
import SplineAnimation from './SplineAnimation'; // Импортируйте компонент SplineAnimation


export const Index = () => {
  return (
    <div className="index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="view">
            
          </div>
          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/6529b73d74ca62c2c15d45de/releases/6529cd3ab080dded6b2c70a2/img/rectangle.png"
          />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/6529b73d74ca62c2c15d45de/releases/6529cd3ab080dded6b2c70a2/img/rectangle-1.png"
          />
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper">
                Здесь всегда пора пить чай <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper">
                Мы не успеваем даже посуду вымыть
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper">{""}</span>
            </p>
          </div>
          <div className="div">Большое бла бла</div>
          <div className="text-wrapper-2">маленькое бла бла</div>
          <div className="text-wrapper-3">до следующего уведомления осталось</div>
          <SplineAnimation />
          <div>
      <Timer />
    </div>
    <div className="frame" />
        </div>
      </div>
      <div>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.480/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/Jl4yz79eUIWuhwux/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
};