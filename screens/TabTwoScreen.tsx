import React, {useState} from 'react';
import {Linking, Image, FlatList, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {storeData} from "../storage/Store";

export default function TabTwoScreen() {

    const [data, setData] = useState([]);
    fetch('https://download.data.grandlyon.com/ws/rdata/sit_sitra.sittourisme/all.json?field=type&value=RESTAURATION&maxfeatures=50')
        .then((response) => response.json())
        .then((responseJson) => setData(responseJson.values))
        .catch((error) => {
            console.error(error);
        });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurants</Text>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <View style={[styles.cardBody, styles.backgroundColorRed]}>
                            <Text style={[styles.cardName, styles.whiteColor]}>{item.nom}</Text>
                            <View style={[styles.row, styles.backgroundColorRed]}>
                                <Image
                                    style={[styles.icon, styles.backgroundColorRed]}
                                    source={require('../assets/images/location.png')}
                                />
                                {
                                    item.commune ? (
                                        <Text
                                            style={[styles.cardCommune, styles.whiteColor, styles.backgroundColorRed]}>{item.commune} {item.codepostal}</Text>

                                    ) : (
                                        <Text style={[styles.backgroundColorRed, styles.whiteColor]}>Commune non
                                            renseignée</Text>
                                    )
                                }
                            </View>
                            <View style={[styles.row, styles.backgroundColorRed]}>
                                <Image
                                    style={[styles.icon, styles.backgroundColorRed]}
                                    source={require('../assets/images/location.png')}
                                />
                                {
                                    item.addresse ? (
                                        <Text
                                            style={[styles.cardAdresse, styles.whiteColor, styles.backgroundColorRed]}>{item.adresse}</Text>

                                    ) : (
                                        <Text style={[styles.backgroundColorRed, styles.whiteColor]}>Adresse non
                                            renseignée</Text>
                                    )
                                }
                            </View>
                            <View>
                                {
                                    item.type_detail ? (
                                        <Text
                                            style={[styles.backgroundColorRed, styles.whiteColor]}>{item.type_detail}</Text>

                                    ) : (
                                        <Text style={[styles.backgroundColorRed, styles.whiteColor]}>Type non
                                            renseigné</Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={[styles.cardFooter, styles.backgroundColorRed]}>
                            <View>
                                {
                                    item.siteweb ? (
                                        <Text style={[styles.cardLink, styles.backgroundColorRed]}
                                              onPress={() => Linking.openURL(`${item.siteweb}`)}>
                                            Lien site vers le site
                                        </Text>
                                    ) : (
                                        <Text style={[styles.backgroundColorRed, styles.whiteColor]}>Site web non
                                            renseigné</Text>
                                    )
                                }
                            </View>
                            <Text style={[styles.cardPhone, styles.whiteColor]}>{item.telephone}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 20,
            color: '#da0000',
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: '80%',
        },

        whiteColor: {
            color: '#fff',
        },

        card: {
            marginBottom: 20,
            backgroundColor: '#da0000',
            padding: 10,
            borderRadius: 5,
        },

        cardBody: {
            marginBottom: 5,
        },

        cardName: {
            fontWeight: 'bold',
            marginBottom: 5,
        },

        backgroundColorRed: {
            backgroundColor: '#da0000',
        },

        cardFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        cardLink: {
            color: '#F7B538',
        },

        icon: {
            width: 15,
            height: 15,
            marginRight:5,
        },

        row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }
    })
;
