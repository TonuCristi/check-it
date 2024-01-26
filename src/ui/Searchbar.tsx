import styled from "styled-components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FieldValues, UseFormRegister } from "react-hook-form";

const StyledSearchBar = styled.form`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: var(--border-blue-sm);
  padding: 0.6rem 1.2rem;
  border-radius: 1.7rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  color: var(--color-blue-400);

  &::placeholder {
    color: var(--color-blue-200);
  }
`;

const Icon = styled(HiOutlineMagnifyingGlass)`
  font-size: 1.8rem;
  stroke-width: 3;
  color: var(--color-blue-400);
`;

export default function Searchbar({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) {
  return (
    <StyledSearchBar>
      <Icon />
      <Input placeholder="Search notes..." {...register("note")} />
    </StyledSearchBar>
  );
}
