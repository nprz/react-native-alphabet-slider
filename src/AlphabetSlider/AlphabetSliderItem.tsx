import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

type AlphabetItemType = {
  letter: string;
  enabled: boolean;
  height?: number;
  alphabetItemContainerStyle?: StyleProp<ViewStyle>;
  alphabetItemTextStyle?: StyleProp<ViewStyle>;
  alphabetItemTextDisabledStyle?: StyleProp<ViewStyle>;
};

export default function AlphabetSliderItem({
  letter,
  enabled,
  height = 20,
  alphabetItemContainerStyle = {},
  alphabetItemTextStyle = {},
  alphabetItemTextDisabledStyle = {},
}: AlphabetItemType) {
  const textStyle = enabled
    ? [styles.text, alphabetItemTextStyle]
    : [styles.textDisabled, alphabetItemTextDisabledStyle];

  return (
    <View style={[styles.container, alphabetItemContainerStyle, { height }]}>
      <Text style={textStyle}>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 11,
    color: "black",
  },
  textDisabled: {
    opacity: 0.5,
    fontSize: 11,
    color: "black",
  },
});
