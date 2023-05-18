import style from "./style.module.css"
import { Link } from "react-router-dom";
import rj from "../../imagens/rj.jpg"

export function Home() {
  return (<>
    <img className={style.heroImage} src={rj}/>
    <div className={style.boxText}>
      <h1 className={style.boxTitle}>Countries-and-Cities</h1>
      <div className={style.boxButtons}>
      <Link to="/login"><button className={style.Buttons}>Login</button></Link>
      {" "}
      <Link to="/signup"><button className={style.Buttons}>Sign up</button></Link>
      </div>
    </div>
    </>
  );
}
