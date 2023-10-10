## Alphabet Slider

SkeletonPlaceholder is a React Native library to easily create an amazing loading effect with FlexBox.<br/>
Android and iOS

### Installation

```bash
npm i alphabet-slider-react-native
```

or 

```bash
yarn add alphabet-slider-react-native
```

### Usage

This package is meant to be used alongside a `FlatList`. The AlphabetSlider component requires 3 props to work: `flatListRef`, `data`, and `path`.
The `flatListRef` is a ref passed to the `FlatList` component, `data` is the data passed to the `FlatList` component, and `path` is the path into the title of the data item.

In use it would look something like this:

```javascript
import React, { useRef } from 'react';
import {View, FlatList} from 'react-native';
import AlphabetSlider from 'react-native-alphabet-slider';

const App = () => {
    const flatListRef = useRef<FlatList>(null);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    type ItemProps = {title: string};

    const Item = ({title}: ItemProps) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (
        <View>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            ref={flatListRef}
        />
        <FlatList flatListRef={flatListRef} data={DATA} path="title" />
        </View>
    );
};
```

For a working example, please take a look at the example directory.


### Properties


|      Prop       |                             Description                              |       Type        |  Default  |
| :-------------: | :------------------------------------------------------------------: | :---------------: | :-------: |
| flatListRef     |                 ref passed to the `FlatList` component                  |    string         | required  |
|  data           |            The data passed to the `FlatList` component             |   string          | required  | 
|  path           | The path into the title of the data item                           |      number       | required  |
| itemHeight      |                  The height of the View wrapping each letter              | number |  20  |
| containerStyle     |   Styles passed to the View wrapping the entire component     |      ViewStyle      |   undefined    |
|  alphabetItemContainerStyle   |          Styles passed to the View wrapping each letter          |      ViewStyle       | undefined |
|  alphabetItemTextStyle   |           Styles passed to the Text component for each letter         |      ViewStyle       | undefined |
|  alphabetItemTextDisabledStyle   |          Styles passed to the Text component for each letter while disabled | ViewStyle |   undefined |


### Contributing

You are welcome to contribute!

### License

[MIT](https://choosealicense.com/licenses/mit/)