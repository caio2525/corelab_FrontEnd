import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  children: ReactNode;
  onEdit: () => void;
  onDelete: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.icon_container}>
          <div onClick={props.onEdit} className={styles.img_container}>
            <img alt='pen' src={"./pen.png"}/>
          </div>
          <div onClick={props.onDelete} className={styles.img_container}>
            <img alt='close' src={'./close.png'}/>
          </div>
          <div onClick={props.onFavorite} className={styles.img_container}>
            <img alt='heart' src={props.isFavorite ? "./closeHeart.png" : "./openHeart.png"}/>
          </div>
      </div>

      <h2 >{props.title}</h2>

      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
