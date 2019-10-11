import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, AsyncStorage, Image, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function Spots() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem("techs").then(storagedTechs => {
            const techsArray = storagedTechs.split(",").map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return (
        <View style={style.container} >
            <Image source={logo} style={style.logo} />
            <ScrollView style={style.scroll}>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,

    },
    scroll: {
        marginBottom: 20
    }
});