import { HeaderContainer, Select, Title } from './styles';

interface IListHeaderProps {
  title: string;
}

export const ListHeader = ({ title }: IListHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>

      {/* Mock sort dropdown for now */}
      <Select defaultValue="updated">
        <option value="updated">Recently Updated</option>
        <option value="new">Newest</option>
        <option value="popular">Most Popular</option>
      </Select>
    </HeaderContainer>
  );
};
