import s from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={s.colorOnline}>Online</p>
      ) : (
        <p className={s.colorOffline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
