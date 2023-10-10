import React, {useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import {fruit} from './demoData';
import AlphabetSlider from '../index';

function renderItems({item: {name}}: {item: {name: string}}): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTextStyle}>{name}</Text>
    </View>
  );
}

function App(): JSX.Element {
  const flatListRef = useRef<FlatList>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={fruit}
          renderItem={renderItems}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          style={styles.flatListContainer}
        />
        <View style={styles.alphabetContainer}>
          <AlphabetSlider
            flatListRef={flatListRef}
            data={fruit}
            path={'name'}
            itemHeight={24}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f9f1e6',
  },
  flatListContainer: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
  itemContainer: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemTextStyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
  },
  itemSeparator: {
    height: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  alphabetContainer: {
    height: '100%',
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default App;
