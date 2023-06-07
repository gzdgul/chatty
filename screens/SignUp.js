import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import NativeSafeAreaView from "react-native-safe-area-context/src/specs/NativeSafeAreaView";
import {COLORS} from "../config/constants";
import SLButtons from "../components/SLButtons";

const SignUp = (props) => (
    <View style={styles.container}>
        <NativeSafeAreaView>
           <View style={styles.contentContainer}>
               <Text style={styles.title}>Create new account</Text>
               <TextInput style={styles.input} placeholder={'Enter your name'}/>
               <TextInput style={styles.input} placeholder={'Enter your email'}/>
               <TextInput secureTextEntry={true} style={styles.input} placeholder={'Enter your password'}/>
               <View style={styles.ButtonContainer}>
                   <SLButtons text={'Already have an account?'} bgColor={'transparent'} txtColor={COLORS.black}/>
                   <SLButtons text={'SignUp'} bgColor={COLORS.black} txtColor={COLORS.white}/>
               </View>
           </View>

        </NativeSafeAreaView>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    contentContainer: {
        padding: 32,
    },
    title: {
        fontSize: 38,
        color: COLORS.white,
        fontWeight: '800',
        marginBottom: 16,
    },
    input: {
       backgroundColor: COLORS.white,
       paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginTop: 16,
        fontSize: 15,
    },
    ButtonContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default SignUp;