import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const Header = (props ) => {
  const title = props.title
    const navigate = useNavigate();

  return (
    <Paper 
      elevation={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#2c2c2c",       
        color: "#e0e0e0",                  
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        marginBottom: 2,
      }}
    >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "#bdbdbd" }} fontSize="large" />
      </IconButton>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          flexGrow: 1,
          textAlign: "center",
          color: "#f5f5f5",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon sx={{ color: "#bdbdbd" }} fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default Header;
