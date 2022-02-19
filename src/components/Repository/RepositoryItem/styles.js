import styled from 'styled-components';

export const RepoList = styled.li`
  & + li {
    margin-top: 28px;
  }

  p {
    font-size: 14px;
    color: #444;
    margin-top: 8px;
  }

  a {
    display: inline-block;
    margin-top: 16px;
    text-decoration: none;
    color: #8257e6;
  }
`;