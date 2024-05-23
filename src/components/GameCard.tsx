import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" minHeight={250}>
      <Image src={game.background_image} height={150} objectFit="cover" />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
