import { createContext, useContext, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// 1) Create a context
const FriendContext = createContext();

function FriendProvider({ children }) {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);

    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    // 2) Provide value to child components
    <FriendContext.Provider
      value={{
        friends: friends,
        selectedFriend: selectedFriend,
        showAddFriend: showAddFriend,
        handleSelection: handleSelection,
        handleAddFriend: handleAddFriend,
        handleShowAddFriend: handleShowAddFriend,
        handleSplitBill: handleSplitBill,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}

function useFriend() {
  const context = useContext(FriendContext);

  if (context === undefined) {
    throw new Error("FriendContext was used outside of the FriendPovider");
  }

  return context;
}

export { FriendProvider, useFriend };
