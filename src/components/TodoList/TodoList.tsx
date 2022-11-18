import { Box, Row, Checkbox, Title } from "../../lib/index";
import { todoList } from "../../utils/todoList";

function TodoList() {
  return (
    <Box alignItems="start">
      <Title>Todo List:</Title>
      {todoList.map((number) => (
        <Row key={number}>
          <Checkbox label={number} id={number} />
        </Row>
      ))}
    </Box>
  );
}

export default TodoList;
