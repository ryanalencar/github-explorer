import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";

import * as S from "./styles";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <S.RepositorySection>
      <S.SectionTitle>Lista de Repositórios</S.SectionTitle>
      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </S.RepositorySection>
  );
}
