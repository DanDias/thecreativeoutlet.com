import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import ReturnTo from "../components/ReturnTo"
import SimplePage from "../components/SimplePage"

const Cart = ({handleSidebar}) => {
  return (
    <SimplePage title='Cart' handleSidebar={handleSidebar}>
      <ReturnTo path="/" text="Home" />
      <Container>
        <Paper>
          Your cart is empty.
        </Paper>
      </Container>
    </SimplePage>
  )
}

export default Cart;