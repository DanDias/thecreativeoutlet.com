import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import ReturnTo from "../components/ReturnTo"
import SimplePage from "../components/SimplePage"

const Test = ({handleSidebar}) => {
  return (
    <SimplePage title='Test' handleSidebar={handleSidebar}>
      <ReturnTo path="/" text="Home" />
      <Container>
        <Paper>
        Hello. You've reached my test page. I never know what weird junk is going to be here. So... good luck!
        </Paper>
      </Container>
    </SimplePage>
  )
}

export default Test;