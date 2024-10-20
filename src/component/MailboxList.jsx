import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>

      <ul>
        {props.mailboxes.length !== 0 ? (
          props.mailboxes.map((currentMail) => (
            <div className="mail-box">
              <li key={currentMail._id}>
                <Link to={`/mailboxes/${currentMail._id}`}>
                  Mailbox {currentMail._id}
                </Link>
              </li>
            </div>
          ))
        ) : (
          <p>Mailbox Not Found!</p>
        )}
      </ul>
    </>
  );
};

export default MailboxList;
