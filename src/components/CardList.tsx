import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const disclosure = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [urlModal, setUrlModal] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setUrlModal(url);
    disclosure.onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid flex="1" spacing="40px" columns={3} align="flex-start">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={disclosure.isOpen}
        onClose={() => disclosure.onClose()}
        imgUrl={urlModal}
      />
    </>
  );
}
