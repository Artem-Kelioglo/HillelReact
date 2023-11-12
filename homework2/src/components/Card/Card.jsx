import Level from './Level/Level';
import Rating from './Rating/Rating';
import User from './User/User';
import './Card.scss';

export default function Card({item}) {
  const {
    id,
    image,
    level,
    title,
    user,
    rating,
    students,
    modules,
    finishedModules = undefined,
    duration,
    isMyCource = false,
  } = item;
  return (
    <div className="card">
      <div className="image__container">
        <img
          src={image}
          alt=""
        />
        <Level level={ level} />
      </div>
      <h3 className="card__title">{title}</h3>
      <div className="card__info">
        <User user={user} />
        <Rating rating={rating} />
      </div>

      {isMyCource ? (
          <div>
            <progress value={finishedModules/modules*100} max="100">
              {finishedModules/modules*100}%
            </progress>
            <div className="card__info">
              <p>{finishedModules} / {modules} Modules</p>
              <div>{finishedModules/modules*100} %</div>
            </div>
          </div> 
      ) : null
      }

      <div className="card__info">
        <div>{students} Student</div>
        <div>{modules} Modules</div>
        <div>{Math.floor(duration / 3600)}h {Math.floor((duration % 3600) / 60)}m</div>
      </div>
    </div>
  )
}