import { Stat } from "./Stats";

type Props = {
  children: string;
  date: string | undefined;
};

export default function Date({ children, date }: Props) {
  return (
    <Stat>
      {children} {date}
    </Stat>
  );
}
