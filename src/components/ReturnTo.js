import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReturnTo = ({path,text}) => {
  const navigate = useNavigate();
  const handleBack = (event) => {
    navigate(path);
  }

  return (
  <IconButton color='primary' onClick={handleBack}>
    <ArrowBack />
    <p>{text}</p>
  </IconButton>);
}

export default ReturnTo;