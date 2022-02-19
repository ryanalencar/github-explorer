import styled from 'styled-components';

export const RepositorySection = styled.section`
  margin: 48px;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 16px;
`;

export const SectionList = styled.ul`
  li {
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
  }
`;