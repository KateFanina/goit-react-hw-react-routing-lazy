import { Wrapper, Input, Icon } from './SearchBox.styled';

export function SearchBox({ value, onChange }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Wrapper>
  );
};
