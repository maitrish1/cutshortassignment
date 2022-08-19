import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cards({ icon, usefor, desc,click }) {
  const [putborder, setputborder] = React.useState({
    borderLine:'',
    borderColour:''
  })
  const changeColor=()=>{
    setputborder({
      ...putborder,
      borderLine:'2px solid',
      borderColour:'#664de5'
    })
  }
  return (
    <CardActionArea >
      <Card sx={{ width: 175, height: 175 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            width: "100%",
          }}
        >
          {icon}
          <Typography variant="subtitle1">{usefor}</Typography>
          <Typography variant="subtitle2">{desc}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
// onClick={changeColor} sx={{ border:`${putborder.borderLine}`,borderColor:`${putborder.borderColour}`, borderRadius:'5px'}}
