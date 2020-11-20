import React, {useState} from 'react';
import {Linking, Image, FlatList, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

export default function TabOneScreen() {
    const [data, setData] = useState([]);
    fetch('https://download.data.grandlyon.com/ws/rdata/sit_sitra.sittourisme/all.json?field=type&value=RESTAURATION')
        .then((response) => response.json())
        .then((responseJson) => setData(responseJson.values))
        .catch((error) => {
            console.error(error);
        });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accueil</Text>
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
