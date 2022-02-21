import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";

import * as S from "./styles";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </ul>
    </S.RepositorySection>
  );
}
