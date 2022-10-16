import styled from "styled-components";

const Container = styled.header`
  height: 60px;
  width: 100vw;
  padding: 0 10%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.5px 0.5px 1px 0.5px #dedede;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #bbc7d2;
  margin-right: 15px;
`;

const Name = styled.span``;

const Header = () => {
  return (
    <Container>
      <LeftSide>BIGYEONG ADMIN</LeftSide>
      <RightSide>
        <AvatarContainer>
          <Avatar />
          <Name>신은진</Name>
        </AvatarContainer>
      </RightSide>
    </Container>
  );
};

export default Header;
