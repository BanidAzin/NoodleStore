import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    screen: Dimensions.get('screen'),
    window: Dimensions.get('window'),
    isPortrait:
      Dimensions.get('screen').width > Dimensions.get('screen').height,
  });

  //Invokes on dimension changes and return new values
  const onChangeDimension = ({screen, window}) => {
    setDimensions({screen, window, isPortrait: screen.width > screen.height});
  };

  //Listening to dimension changes
  useEffect(() => {
    let dimensionListener = Dimensions.addEventListener('change', onChangeDimension);

    return () => dimensionListener.remove();
  }, []);

  return dimensions;
};
