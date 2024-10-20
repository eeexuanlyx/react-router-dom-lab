import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  _id: 0,
  boxholder: "",
  boxsize: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="boxsize">Select a Box Size</label>
        <select
          type="text"
          id="boxsize"
          name="boxsize"
          value={formData.boxsize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
