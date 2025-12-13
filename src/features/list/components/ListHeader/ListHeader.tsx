import { HeaderContainer, Select, Title } from './styles';

interface IListHeaderProps {
  title: string;
}

const DISCOVER_LINKS = [
  { label: 'Latest Releases', to: '/sort/nov-love-daily-update' },
  { label: 'Hot Novel', to: '/sort/nov-love-hot' },
  { label: 'Completed Novel', to: '/sort/nov-love-complete' },
  { label: 'Most Popular', to: '/sort/nov-love-popular' },
];

export const ListHeader = ({ title }: IListHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>

      <Select defaultValue="updated">
        <option value="updated">Recently Updated</option>
        <option value="new">Newest</option>
        <option value="popular">Most Popular</option>
      </Select>
    </HeaderContainer>
  );
};
