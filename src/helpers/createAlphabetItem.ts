import { IndexPosition } from "./findIndexPosition";
import { RefObject } from "react";
import { FlatList } from "react-native";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type createAlphabetItemsArgs = {
  itemHeight: number;
  heightFromTop: number;
  indexPositions: IndexPosition[];
  flatListRef: RefObject<FlatList>;
  handleAlphabetScroll: ({
    index,
    flatListRef,
  }: {
    index: number;
    flatListRef: RefObject<FlatList>;
  }) => void;
};

export default function createAlphabetItems({
  itemHeight,
  heightFromTop,
  indexPositions,
  handleAlphabetScroll,
  flatListRef,
}: createAlphabetItemsArgs) {
  const alphabetArray = Array.from(ALPHABET);

  return alphabetArray.map((letter, index) => {
    const found = indexPositions.find(
      ({ letter: beginningOfList }) => beginningOfList === letter
    );

    const enabled = Boolean(found);

    return {
      letter,
      enabled,
      condition: (touchY: number) =>
        enabled &&
        itemHeight * index + heightFromTop <= touchY &&
        itemHeight * (index + 1) + heightFromTop > touchY,
      handleTouch: () => {
        if (found) {
          handleAlphabetScroll({ index: found.index, flatListRef });
        }
      },
    };
  });
}
