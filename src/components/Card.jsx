import React from "react";
import ellipsisIcon from '../assets/images/icon-ellipsis.svg'

const Card = (props) => {
  return (
    <section className="small-card card" id={props.category}>
      <div className="small-card__icon-wrapper" >
        <img className={`small-card__icon ${props.category}`}  src={props.background} alt={`${props.category} icon`} />
      </div>
      <div className="small-card__text-wrapper">
        <div className="small-card__category-wrapper">
          <p className="small-card__category">{props.category}</p>
          <img className="small-card__icon--ellipsis" src={ellipsisIcon} alt="ellipsis icon" />
        </div>
        <div className="small-card__time-wrapper">
          <h2 className="small-card__hour">{props.currentTime}hrs</h2>
          <p className="small-card__previous-info">Last week - {props.lastTime}hrs</p>
        </div>
      </div>
    </section>
  )
}

export default Card;