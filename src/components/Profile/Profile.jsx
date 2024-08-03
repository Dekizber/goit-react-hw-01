import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.userCard}>
      <div className={s.userBox}>
        <img className={s.userAvatar} src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>
      <ul className={s.userStats}>
        <li className={s.userStatsItem}>
          <span className={s.userStatsText}>Followers</span>
          <span className={s.userStatsQua}>{followers}</span>
        </li>
        <li className={s.userStatsItem}>
          <span className={s.userStatsText}>Views</span>{" "}
          <span className={s.userStatsQua}>{views}</span>
        </li>
        <li className={s.userStatsItem}>
          <span className={s.userStatsText}>Likes</span>{" "}
          <span className={s.userStatsQua}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
