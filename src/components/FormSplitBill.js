import { useState } from "react";
import { toast } from "react-hot-toast";

import { useFriend } from "../Context/FriendContext";

import Button from "../UI/Button";

function FormSplitBill() {
  // 3) Consuming context value
  const { selectedFriend, handleSplitBill } = useFriend();

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) {
      toast.error("Failed to split bill");
      return;
    }

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    toast.success("Split the bill successfully!");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" onChange={(e) => setBill(Number(e.target.value))} />

      <label>🧍🏻 Your expense</label>
      <input
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>

        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
