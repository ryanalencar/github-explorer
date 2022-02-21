import * as S from "./styles";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <S.RepoList>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description}</p>

      <a href={repository.html_url}>Acessar repositório</a>
    </S.RepoList>
  );
}
