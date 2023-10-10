import React, { useMemo, useState, useRef, RefObject } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";
import AlphabetSliderItem from "./AlphabetSliderItem";
import findIndexPosition from "../helpers/findIndexPosition";
import handleAlphabetScroll from "../helpers/handleAlphabetScroll";
import createAlphabetItems from "../helpers/createAlphabetItem";

type AlphabetSliderProps = {
  flatListRef: RefObject<FlatList>;
  data: any[];
  path: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemHeight?: number;
  alphabetItemContainerStyle?: StyleProp<ViewStyle>;
  alphabetItemTextStyle?: StyleProp<ViewStyle>;
  alphabetItemTextDisabledStyle?: StyleProp<ViewStyle>;
};

function AlphabetSlider({
  flatListRef,
  data,
  path,
  containerStyle,
  itemHeight = 20,
  ...alphabetItemStyles
}: AlphabetSliderProps): JSX.Element {
  const [currentHeader, setCurrentHeader] = useState("A");

  const [heightFromTop, setHeightFromTop] = useState(0);

  const sliderRef = useRef<View>(null);

  const indexPositions = useMemo(
    () => findIndexPosition({ data, path }),
    [data, path]
  );

  const alphabetItems = useMemo(
    () =>
      createAlphabetItems({
        indexPositions,
        itemHeight,
        heightFromTop,
        handleAlphabetScroll,
        flatListRef,
      }),
    [
      indexPositions,
      itemHeight,
      heightFromTop,
      handleAlphabetScroll,
      flatListRef,
    ]
  );

  function renderAlphabetItems(): JSX.Element[] {
    return alphabetItems.map((item) => (
      <AlphabetSliderItem
        height={itemHeight}
        key={item.letter}
        {...item}
        {...alphabetItemStyles}
      />
    ));
  }

  function handleResponder(e: GestureResponderEvent) {
    const item = alphabetItems.find(({ condition }) =>
      condition(e.nativeEvent.pageY)
    );

    if (item && currentHeader !== item.letter) {
      setCurrentHeader(item.letter);

      item.handleTouch();
    }
  }

  return (
    <View
      ref={sliderRef}
      style={[styles.container, containerStyle]}
      onLayout={(e) => {
        sliderRef?.current?.measure((x, y, width, height, px, py) => {
          setHeightFromTop(py);
        });
      }}
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleResponder}
      onResponderMove={handleResponder}
    >
      {renderAlphabetItems()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default AlphabetSlider;
