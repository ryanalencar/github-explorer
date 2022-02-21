import * as S from "./styles";

export function RepositoryItem({ repository }) {
  return (
    <S.RepoList>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description}</p>

      <a href={repository.html_url}>Acessar repositório</a>
    </S.RepoList>
  );
}
