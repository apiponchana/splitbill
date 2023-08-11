import { useFriend } from "../Context/FriendContext";

import FormAddFriend from "../components/FormAddFriend";
import FormSplitBill from "../components/FormSplitBill";
import FriendsList from "../components/FriendsList";
import Button from "./Button";

function Homepage() {
  // 3) Consuming context value
  const { showAddFriend, selectedFriend, handleShowAddFriend } = useFriend();

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        {showAddFriend && <FormAddFriend />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill key={selectedFriend.id} />}
    </div>
  );
}

export default Homepage;
