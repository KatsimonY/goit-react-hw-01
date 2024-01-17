import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </ul>
  );
};
