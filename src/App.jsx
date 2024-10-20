import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./component/Navbar";
import MailboxList from "./component/MailboxList";
import MailboxForm from "./component/MailboxForm";
import MailboxDetails from "./component/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailData) => {
    newMailData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
