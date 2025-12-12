import { formatDescriptionToParagraphs } from 'utils/formatDescription';
import { Cards, Text, Title } from './styles';

interface INovelDescriptionProps {
  description: string | string[];
}

export const NovelDescription = ({ description }: INovelDescriptionProps) => {
  const formatted = Array.isArray(description)
    ? formatDescriptionToParagraphs(description.join('\n\n'))
    : formatDescriptionToParagraphs(description);

  return (
    <Cards>
      <Title>Description</Title>
      <Text>
        {formatted.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Text>
    </Cards>
  );
};
