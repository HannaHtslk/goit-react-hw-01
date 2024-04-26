import s from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={avatar} alt={tag} />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span className={s.dataName}>Followers</span>
          <span className={s.number}>{followers}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.dataName}>Views</span>
          <span className={s.number}>{views}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.dataName}>Likes</span>
          <span className={s.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
