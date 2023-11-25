import React, { FC } from 'react';
import { Text, Image, Pressable } from 'react-native';
import styles from './imageOption.styles';

interface ImageOptionsInterface {
  imageUri: string;
  textOption: string;
  isSelected?: boolean;
  setSelectedOption: (optionId: string) => void;
}

const ImageOption: FC<ImageOptionsInterface> = ({
  imageUri,
  textOption,
  isSelected = false,
  setSelectedOption
}) => {
  return (
    <Pressable
      onPress={setSelectedOption}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {}
      ]}>
      <Image source={{ uri: imageUri }} style={styles.optionImage} />
      <Text style={[styles.optionText, isSelected ? styles.selectedText : {}]}>
        {textOption}
      </Text>
    </Pressable>
  );
};

export default ImageOption;
