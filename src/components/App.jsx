import { Profile } from "./Profile/Profile"
import userData from "../userData.json"
import { FriendList } from "./FriendList/FriendList";
import friends from "../friends.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"

const App = () => {
  return (
    <>
      <h2 className="title">Your profile</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className="title">Your friends</h2>
      <FriendList friends={friends} />
      <h2 className="title">Your transactions</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
