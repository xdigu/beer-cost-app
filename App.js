
import React, { Fragment, Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import OneSignal from 'react-native-onesignal'

import img from './src/images/beer.png'

import styles from './src/style'
import { translate } from './src/locales'

import BeerContainer from './src/components/BeerContainer'
import Button from './src/components/Button'

import oneSignalKey from './src/constants/oneSignal'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beerA: { multiply: "", quantity: "", cost: "" },
      beerB: { multiply: "", quantity: "", cost: "" },
      result: ""
    }

    OneSignal.init(oneSignalKey, { kOSSettingsKeyAutoPrompt: true })
  }

  updateBeerProperty(beerName, beerProperty, value) {
    this.setState(prevState => ({
      [beerName]: {
        ...prevState[beerName],
        [beerProperty]: value
      }, result: ""
    }))
  }

  verifyCheaperBeer() {
    const { beerA, beerB } = this.state

    const costBeerA = beerA.cost.replace(/ /g, '') / (/**beerA.multiply * */ beerA.quantity)
    const costBeerB = beerB.cost.replace(/ /g, '') / (/** beerB.multiply * */ beerB.quantity)

    if (costBeerA < costBeerB)
      return this.setState({ result: (translate('HOME_beerNameA') + ' ' + translate('HOME_result')) })

    if (costBeerB < costBeerA)
      return this.setState({ result: (translate('HOME_beerNameB') + ' ' + translate('HOME_result')) })

    if (costBeerB == costBeerA)
      return this.setState({ result: translate('HOME_resutSame') })
  }

  render() {
    const { beerA, beerB, result } = this.state

    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaViewTop} />
        <SafeAreaView style={styles.safeAreaViewBotton}>
          <StatusBar barStyle="dark-content" hidden={true} />

          <ScrollView>
            <View>
              <Text style={styles.title}>{translate('HOME_mainTitle')}</Text>
              <Image source={img} style={styles.images} />
            </View>

            <Text style={styles.description}>{translate('HOME_explainText')}</Text>


            <View style={styles.container} >
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }} >
                <BeerContainer
                  name={translate('HOME_beerNameA')}

                  valueQuantity={beerA.quantity}
                  onChangeQuantity={(text) => { this.updateBeerProperty('beerA', 'quantity', text) }}

                  valueCost={beerA.cost}
                  onChangeCost={(text) => { this.updateBeerProperty('beerA', 'cost', text) }}
                />

                <View style={styles.divideBar} />

                <BeerContainer
                  name={translate('HOME_beerNameB')}

                  valueQuantity={beerB.quantity}
                  onChangeQuantity={(text) => { this.updateBeerProperty('beerB', 'quantity', text) }}

                  valueCost={beerB.cost}
                  onChangeCost={(text) => { this.updateBeerProperty('beerB', 'cost', text) }}
                />
              </View>
            </View>

            <View style={styles.resultContainer}>
              <Text >{translate('HOME_question')}</Text>

              <Text style={styles.description}>{result}</Text>

              <Button title={translate('HOME_buttonText')} onPress={() => this.verifyCheaperBeer()} />
            </View>

          </ScrollView>
        </ SafeAreaView>
      </Fragment>
    )
  }
}
