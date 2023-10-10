import { RefObject } from "react";
import { FlatList } from "react-native";

type handleAlphabetScrollArgs = {
  index: number;
  flatListRef: RefObject<FlatList>;
};

export default function handleAlphabetScroll({
  index,
  flatListRef,
}: handleAlphabetScrollArgs) {
  if (flatListRef.current) {
    flatListRef.current.scrollToIndex({
      index,
      viewOffset: 0,
      animated: false,
    });
  }
}
