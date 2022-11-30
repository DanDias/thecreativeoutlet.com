import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import ReturnTo from "../components/ReturnTo"
import SimplePage from "../components/SimplePage"

const Clues = () => {
  return (
    <SimplePage title='Clues'>
      <ReturnTo path="/" text="Home" />
      <Container>
        <Paper>
          Oh. This isn't a search page. <br />
          It's a clue page! <br />
          <br /><br /><br /><br /><br /><br /><br /><br />I have no clue.
        </Paper>
      </Container>
    </SimplePage>
  )
}

export default Clues;