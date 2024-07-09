import styled from "styled-components";
import VaccineSchedulerSection from "./HomeComponents/VaccineSchedulerSection";

export default function RabiesVaccineSchedule() {
  return (
    <Wrapper className="container">
      <VaccineSchedulerSection />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
