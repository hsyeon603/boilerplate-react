import { styled } from "styled-components";
import { Column, Container, Row } from "./components/layout";

const StyledRow = styled(Row)`
  height: 50px;
`;
const StyledColumn = styled(Column)<{ $height: string }>`
  height: ${(props) => props.$height};
  border: 2px solid black;
`;

function App() {
  return (
    <>
      <Container>
        <StyledRow>
          <StyledColumn
            $smCount={1}
            $mdCount={2}
            $lgCount={6}
            $height={"100%"}
          />
        </StyledRow>
      </Container>
    </>
  );
}

export default App;
