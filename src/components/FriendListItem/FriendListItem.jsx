import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};
