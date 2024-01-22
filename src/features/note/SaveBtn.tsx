import Button from "../../ui/Button";

export default function SaveBtn({ isEditing }: { isEditing: boolean }) {
  return (
    <Button variant="regular" disabled={!isEditing}>
      Save
    </Button>
  );
}
