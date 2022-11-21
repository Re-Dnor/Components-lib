import { useState } from "react";
import { Box, Row, Checkbox, Title } from "../../lib/index";
import { todoList } from "../../utils/todoList";

function TodoList() {
  const [check, setCheck] = useState(false);

  return (
    <Box alignItems="start">
      <Title>Todo List:</Title>
      <Row></Row>
      {todoList.map((number) => (
        <Row key={number}>
          <Checkbox label={number} id={number} value={number} onChange={() => setCheck(!check)} />
        </Row>
      ))}
    </Box>
  );
}

export default TodoList;
