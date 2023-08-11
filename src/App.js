/* eslint-disable no-unused-vars */

import { Toaster } from "react-hot-toast";
import { FriendProvider } from "./Context/FriendContext";

import Homepage from "./UI/Homepage";

function App() {
  return (
    <FriendProvider>
      <Homepage />

      <Toaster
        position="top-center"
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "24px",
            padding: "16px 24px",
          },
        }}
      />
    </FriendProvider>
  );
}

export default App;
