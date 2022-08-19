import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormGroup, InputLabel } from "@mui/material";
import Header from "./Header";
function StepForm({
  firstField,
  secondField,
  firstPlaceholder,
  secondPlaceholder,
  inputprops,
}) {
  const [valueone, setvalueone] = useState("");
  const [valuetwo, setvaluetwo] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: {lg:'30vw',md:'30vw',sm:'50vw',xs:'80vw'} },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="250px"
    >
      <Header />
      <FormGroup>
        <InputLabel htmlFor="fullname">{firstField}</InputLabel>
        <TextField
          InputProps={inputprops}
          fullWidth
          id="fullname"
          value={valueone}
          onChange={(e) => setvalueone(e.target.value)}
          placeholder={firstPlaceholder}
          variant="outlined"
        />
      </FormGroup>

      <FormGroup>
        <InputLabel htmlFor="fullname">{secondField}</InputLabel>
        <TextField
          fullWidth
          id="fullname"
          value={valuetwo}
          onChange={(e) => setvaluetwo(e.target.value)}
          placeholder={secondPlaceholder}
          variant="outlined"
        />
      </FormGroup>
      
    </Box>
  );
}

export default StepForm;
