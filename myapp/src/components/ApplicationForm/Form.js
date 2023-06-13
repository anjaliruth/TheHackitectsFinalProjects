import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
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
              defaultValue=""
              variant="filled"
              sx={{ width: "15ch" }}
            />
          </div>
          <div className="name">
            <TextField
              required
              id="filled-required"
              label="First Name"
              defaultValue=""
              variant="filled"
              sx={{ width: "20ch" }}
            />
            <TextField
              required
              id="filled-required"
              label="Last Name"
              defaultValue=""
              variant="filled"
              sx={{ width: "20ch" }}
            />
          </div>
          <div className="Address">
            <TextField
              required
              id="filled-required"
              label="House Number/Name"
              defaultValue=""
              variant="filled"
              sx={{ width: "25ch" }}
            />
            <TextField
              required
              id="filled-required"
              label="Street Name"
              defaultValue=""
              variant="filled"
              sx={{ width: "25ch" }}
            />
          </div>
          <div className="Town/City">
            <TextField
              required
              id=""
              label="Town/City"
              defaultValue=""
              variant="filled"
              sx={{ width: "25ch" }}
            />
          </div>
          <div className="Postcode">
            <TextField
              required
              id="filled-required"
              label="Postcode"
              defaultValue=""
              variant="filled"
              sx={{ width: "15ch" }}
            />
          </div>
          <div className="email-number">
            <TextField
              required
              id="filled-required"
              label="Email"
              defaultValue=""
              variant="filled"
              sx={{ width: "30ch" }}
            />
          </div>
          <div className="PhoneNumber">
            <TextField
              required
              id="filled-required"
              label="Phone Number"
              defaultValue=""
              variant="filled"
              sx={{ width: "20ch" }}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
