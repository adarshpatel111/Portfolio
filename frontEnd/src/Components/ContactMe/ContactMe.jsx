import React, { useState } from "react";
import Lottie from "lottie-react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";
import contactMe from "../../assets/contactMe.json";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
const backendUrl = import.meta.env.VITE_BACKENDURL;
  const validateForm = () => {
    if (name === "" || email === "" || message === "" || subject === "") {
      toast.error("Please fill out all fields.");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }
    return true;
  };
  const handleSendEmail = (e) => {
     if (validateForm()) {
    e.preventDefault();
    //make Tamplate
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Adarsh JOB SEEKER",
      subject: subject,
      message: message,
    };

    // Send email
    axios
      .post(`${backendUrl}/mail`, templateParams)
      .then((response) => {
        toast.success("Email sent successfully");
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      });
  }
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <Stack
        id="contact"
        sx={{
          width: "100%",
          minHeight: "90vh",
          textAlign: "center",
          color: rootColors.textPrimary,
          padding: { xs: 2, md: 0 }, // Responsive padding
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1">
          Feel free to reach out for any inquiries or collaboration!
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }} // Column on small screens, row on medium and above
          spacing={2} // Space between children
          sx={{
            width: "100%",
            alignItems: "center", // Center items vertically
          }}
        >
          {/* Left Panel */}
          <Stack
            flex={1}
            sx={{
              backgroundColor: rootColors.backgroundPrimary,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: { xs: "100%", md: "auto" }, // Full width on small screens
            }}
          >
            <Lottie
              style={{ width: "100%", height: "auto" }}
              animationData={contactMe}
              loop={true}
            />
          </Stack>

          {/* Right Panel */}
          <Stack
            flex={1}
            sx={{
              backgroundColor: rootColors.backgroundSecondary,
              padding: 2,
              justifyContent: "center",
              width: { xs: "100%", md: "auto" }, // Full width on small screens
            }}
          >
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ marginBottom: 2 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  color: rootColors.textPrimary,
                  borderRadius: "50px",
                  width: { xs: "80%", sm: "60%", md: "30%" }, // Responsive width
                }}
                onClick={(e) => {
                  handleSendEmail(e);
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactMe;
