import React from "react";
import Index from "../components/Index/Index";
import Footer from "../components/common/Footer";
import styled from "styled-components";
const MainPage = () => {
  return (
    <div>
      <TopBlock>
        이 페이지는 학습을 목적으로 롯데시네마를 클론코딩한 사이트며, 모든
        저작권은 롯데시네마에 있습니다.
        <p>관리자ID: admin PW: admin</p>
      </TopBlock>
      <Index />
      <Footer />
    </div>
  );
};

const TopBlock = styled.div`
  background-color: black;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  > p {
    font-weight: bold;
    margin-left: 1rem;
  }
`;

export default MainPage;
