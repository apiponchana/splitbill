import { useFriend } from "../Context/FriendContext";

import Friend from "./Friend";

function FriendsList() {
  // 3) Consuming context value
  const { friends, handleSelection, selectedFriend } = useFriend();

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
