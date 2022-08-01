import { Container } from "./style";
import { RiErrorWarningLine } from "react-icons/ri";

function Modal() {
  return (
    <Container>
      <div>
        <RiErrorWarningLine />
        <h3>O produto já está no carrinho</h3>
      </div>
    </Container>
  );
}

export default Modal;
