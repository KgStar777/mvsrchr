import { Fragment, ReactNode } from "react";
import { getItemByType } from "../../../helpers";
import { IFilm } from "../../../models/IFilm";

import classes from "./FilmInfo.module.css";

interface IInfoProps {
  film: IFilm;
  children: ReactNode;
  actions: ReactNode[];
}

export function Info(props: IInfoProps) {
  return (
    <div className={classes.imageGradient}>
      <div className={classes.gradient}>
        {/* <img src={typeof film.backdrop !== "string" ? film?.backdrop?.url : film?.backdrop ?? typeof film.poster !== "string" ? film?.poster?.url : film?.poster} /> */}
        {/* <img src={typeof props.film.poster !== "string" ? props.film?.poster?.url : props.film?.poster} /> */}
        <img src={getItemByType(props?.film?.poster, "string", "url")} />
        <div className={classes.filmBox}>
          <section className={classes.film}>
            <h1>{props.film.name}</h1>
            <div className={classes.subscription}>
              {props.children}
            </div>
            <div className={classes.resizeButtonBox}>
              {props.actions.map((action, idx) => (
                <Fragment key={idx}>{action}</Fragment>
              ))}
            </div>
          </section>
        </div>
      </div>  
    </div>
  )
}
