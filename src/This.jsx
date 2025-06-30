import React, { useState } from "react";

function EmailLogin() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    
  };

  const handleSubmit = () => {
    alert(`Email entered: ${email}`);
    
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EmailLogin;
