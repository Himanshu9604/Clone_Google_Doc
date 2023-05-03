import React from "react";
import style from "./Home.module.css";
export default function Home() {
 
  return (
    <div>
      <div className={style.main}>
        <div className={style.wrapper}>
          <div
           id="printablediv"
            className={style.textArea}
            contentEditable="true"
          />
        </div>
      </div>
      </div>
  );
}
