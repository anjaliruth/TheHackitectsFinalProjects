import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./ApplicationForm.css";
//

export default function ApplicationForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
    <div id="FormFields">
      <div className="id">
        <TextField
          required
          id="filled-required"
          label="Dog ID"
          defaultValue="123455"
          variant="filled"
        />
      </div>
      <div className="name">
        <TextField
          required
          id="filled-required"
          label="First Name"
          defaultValue="Name"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Last Name"
          defaultValue="Last Name"
          variant="filled"
        />
      </div>
      <div className="Address">
        <TextField
          required
          id="filled-required"
          label="House Number/Name"
          defaultValue="Address"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Street Name"
          defaultValue="Street Name"
          variant="filled"
        />
        </div>
        <div className="Town/City">
        <TextField
          required
          id=""
          label="Town/City"
          defaultValue="Town/City"
          variant="filled"
        />
      </div>
      <div className="Postcode">
        <TextField
          required
          id="filled-required"
          label="Postcode"
          defaultValue="Postcode"
          variant="filled"
        />
      </div>
      <div className="email-number">
        <TextField
          required
          id="filled-required"
          label="Email"
          defaultValue="Email"
          variant="filled"
        />
        </div>
        <div className="PhoneNumber">
        <TextField
          required
          id="filled-required"
          label="Phone Number"
          defaultValue="Phone Number"
          variant="filled"
        />
      </div>
      </div>
    </Box>
  );
}
