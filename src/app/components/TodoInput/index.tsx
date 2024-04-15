import { progressSpinner } from 'plop';
import React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${proos => (proos.isEditing ? '15px 0px' : '15px 25px')};
  width: 100%auto;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100;
  border: none;
  outline: 0cap; ;
`;

export default function TodoInput({
  addTodo,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
  editModeTodo?: () => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <>
      <Box isEditing={isEditing}>
        <Input
          placeholder="할일을 입력해주세요"
          value={content}
          onBlur={e => {
            if (e.currentTarget == e.target) {
              editTodo && editTodo(content);
            }
          }}
          onChange={e => setContent(e.target.value)}
          onKeyPress={e => {
            if (content === '') return;
            if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
            if (isEditing) {
              editTodo && editTodo(content);
            } else {
              addTodo && addTodo(content);
              setContent('');
            }
          }}
        />
      </Box>
    </>
  );
}
