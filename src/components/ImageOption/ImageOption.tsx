import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './imageOption.styles';

interface ImageOptionsInterface {
  imageUri: string;
  textOption: string;
}

const ImageOption: FC<ImageOptionsInterface> = ({ imageUri, textOption }) => {
  return (
    <View style={styles.optionContainer}>
      <Image source={{ uri: imageUri }} style={styles.optionImage} />
      <Text style={styles.optionText}>{textOption}</Text>
    </View>
  );
};

export default ImageOption;
