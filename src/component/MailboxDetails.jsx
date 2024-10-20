import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const SelectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  if (!SelectedBox) {
    return <div>Mailbox not found.</div>;
  }

  return (
    <>
      <h2>Mailbox {mailboxId}</h2>
      <dl>
        <dt>Boxholder:</dt>
        <dd>{SelectedBox.boxholder}</dd>
        <dt>Box Size:</dt>
        <dd>{SelectedBox.boxsize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
