import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cd81ce3d-8254-4b16-ad5a-83acc418171a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required/>
          <input type="email" name="email" required/>
          <textarea name="message" required></textarea>
  
          <button type="submit">Submit</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }