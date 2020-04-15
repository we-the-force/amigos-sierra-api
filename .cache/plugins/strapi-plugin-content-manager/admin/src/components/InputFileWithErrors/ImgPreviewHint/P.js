import styled from 'styled-components';

const P = styled.p`
  position: absolute;
  top: 52px;
  display: block;
  width: 100%;
  padding: 12px 75px 0 75px;
  white-space: pre-line;
  color: #333740;
  line-height: 18px;
  font-size: 13px;
  > span {
    display: block;
    > u {
      cursor: pointer;
    }
  }
`;

export default P;
