import { Stat } from "./Stats";

type Props = {
  children: string;
  count: number | undefined;
};

export default function Count({ children, count }: Props) {
  return (
    <Stat>
      {children} {count}
    </Stat>
  );
}
