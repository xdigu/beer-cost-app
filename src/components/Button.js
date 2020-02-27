
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from '../style'

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
