import styled from "styled-components";

export default Component => styled(Component)`
  margin-left: auto;
  margin-right: auto;
  width: 19%;

  .user-block {
     display: flex;
  }
  .user-block-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .user-repos {
    display: flex;    
  }

  .user-repos_icon {
    margin-right: 25px;
  }
`;
