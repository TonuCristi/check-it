import Button from "../../ui/Button";
import { Props } from "./Title";

export default function SaveBtn({ isEditing }: Props) {
  return (
    <Button variant="regular" disabled={!isEditing}>
      Save
    </Button>
  );
}
