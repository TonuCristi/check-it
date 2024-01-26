import { Dispatch, MouseEvent, SetStateAction } from "react";

import Button from "../../ui/Button";

interface EditProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export default function EditBtn({ setIsEditing }: EditProps) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  }

  return (
    <Button variant="regular" onClick={handleClick}>
      Edit
    </Button>
  );
}
