import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import {useDimensions} from '../helpers';

export const ShimmerView = ({number = 4, shimmer, color = ['#121224', '#06060a', '#000000']}) => {
  const {window} = useDimensions();

  const {height, width} = window;

  const mine = Array(number).fill(Math.random());

  return mine.map((key, index) => (
    <ShimmerPlaceholder
      key={index}
      autoRun
      LinearGradient={LinearGradient}
      style={[
        styles.shimmer,
        {
            minHeight: height * 0.3,
            width: width * 0.95,
            borderRadius: height * 0.02,
        },
        shimmer,
      ]}
      colorShimmer={color}
    />
  ))
}

const styles = StyleSheet.create({
  shimmer: {
    alignSelf: 'center',
    margin: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
})
