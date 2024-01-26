import Button from "../../ui/Button";

type Props = {
  isEditing: boolean;
};

export default function SaveBtn({ isEditing }: Props) {
  return (
    <Button variant="regular" disabled={!isEditing}>
      Save
    </Button>
  );
}
