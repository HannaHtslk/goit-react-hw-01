import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={s.image} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p
        className={clsx({
          [s.isOnline]: isOnline,
        })}
      >
        {isOnline} Status
      </p>
    </div>
  );
};

export default FriendListItem;
