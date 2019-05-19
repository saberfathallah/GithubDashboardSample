import styled from "styled-components";

export default Component => styled(Component)`
  height: 60px;
  color: white;
  background: #08d4f7;
  text-align: center;
  display: flex;
  justify-content:center;
  align-content:center;
  flex-direction:column;

  .header-title {
    font-size: 24px;
    vertical-align: middle;
  }
`;
