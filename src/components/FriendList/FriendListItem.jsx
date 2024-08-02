const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {/* {isOnline ? (
        <p className={css.colorOnline}>Online</p>
      ) : (
        <p className={css.colorOffline}>Offline</p>
      )} */}
    </div>
  );
};

export default FriendListItem;
