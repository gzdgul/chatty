import React from 'react';
import {COLORS} from "../config/constants";
import CellButton from "./CellButton";
import {StyleSheet, View} from "react-native";

const CellOptions = (props) => (
    <View>
        <CellButton
            icon={'log-out-outline'}
            text={'Logout'}
            onPress={() => {alert('Çıkış Yapılıyor')}}
            tintColor={COLORS.accent}
        />
       <View style={styles.bottomOpt}>
           <CellButton
               icon={'information-circle-outline'}
               text={'Help'}
               onPress={() => {alert('Help')}}
               tintColor={COLORS.green}
           />
           <CellButton
               icon={'heart-outline'}
               text={'Tell a Friend'}
               onPress={() => {alert('Thanks v3')}}
               tintColor={COLORS.pink}
           />
       </View>
    </View>
);
const styles = StyleSheet.create({
    bottomOpt: {
        marginTop: 16,
    },
});
export default CellOptions;