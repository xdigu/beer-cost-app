
import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import styles from '../style'
import { translate } from '../locales'


export default function BeerContainer({
  name,
  onChangeQuantity,
  valueQuantity,
  onChangeCost,
  valueCost
}) {
  const textInputStyle = { height: 30, width: 130, textAlign: 'center', color: 'dimgrey' }
  const maskCostOption = { precision: 2, separator: '.', delimiter: ' ', unit: '', suffixUnit: '' }

  return (
    <View style={styles.beerContainer} >
      <Text style={styles.beerName}>{name}</Text>

      <View style={styles.describe}>
        <Text>{translate('HOME_quantity')}</Text>

        <TextInput
          keyboardType="number-pad"
          placeholder={translate('HOME_quantityPlaceHolder')}
          onChangeText={onChangeQuantity}
          value={valueQuantity}
          clearTextOnFocus={true}
          style={textInputStyle}
        />
      </View>

      <View style={styles.describe}>
        <Text>{translate('HOME_cost')}</Text>

        <TextInputMask
          keyboardType="number-pad"
          type={'money'}
          placeholder={translate('HOME_costPlaceHolder')}
          onChangeText={onChangeCost}
          value={valueCost}
          options={maskCostOption}
          clearTextOnFocus={true}
          style={textInputStyle}
        />
      </View>
    </View>
  )
}
