import styled from "styled-components";

import Title from "../features/statistics/Title";
import Stats from "../features/statistics/Stats";

const StyledStatistics = styled.div``;

export default function Statistics() {
  return (
    <StyledStatistics>
      <Title />
      <Stats />
    </StyledStatistics>
  );
}
