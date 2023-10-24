import React from "react";

const Contact =()=>{
    return(
        <>
        
         
    <div class="container">
        <h2 className="Other-heading">Contact Information</h2>
        <div class="contact-info">
            <p><span class="highlight">Address:</span> 123 Food Street, Foodville</p>
            <p><span class="highlight">Phone:</span> +1 (123) 456-7890</p>
            <p><span class="highlight">Email:</span> info@foodvilla.com</p>
        </div>
        <h2>Send Us a Message</h2>
        <form>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required></input>
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
        </>
    )
};
export default Contact;