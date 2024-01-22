import { Dispatch, SetStateAction } from "react";

import Button from "../../ui/Button";

interface EditProps {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export default function EditBtn({ isEditing, setIsEditing }: EditProps) {
  function handleClick() {
    setIsEditing((prev) => !prev);
    console.log(isEditing);
  }

  return (
    <Button variant="regular" onClick={handleClick}>
      Edit
    </Button>
  );
}
