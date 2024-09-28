import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Space,
  Text,
  Title,
} from '@mantine/core';

interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

interface Props {
  school: string;
  characters: Character[];
}

function CharacterList({ school, characters }: Props) {
  return (
    <div>
      <Title order={2}>{school}</Title>
      <List my="xl" listStyleType="none">
        {characters.map((character) => (
          <ListItem key={character.id} display="flex" my="lg">
            <Flex>
              <Avatar color="red.5" radius="xl" size={48} />
              <Box ml="md" ta="left">
                <Text>{character.name}</Text>
                <Text span display="flex">
                  {character.grade}年生
                  <Space w="xs" />
                  {character.height ?? '???'}cm
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CharacterList;
