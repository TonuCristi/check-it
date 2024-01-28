import { Stat } from "../../pages/Statistics";

type Props = {
  children: string;
  date: string;
};

export default function Date({ children, date }: Props) {
  return (
    <Stat>
      {children} {date}
    </Stat>
  );
}
