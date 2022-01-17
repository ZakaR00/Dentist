import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import {useToast} from 'react-native-styled-toast';
import { useRoute } from "@react-navigation/native";
import {  TextInput } from "react-native-paper";
import patient from "../../utils/api/patients";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../utils/color/color";


function AddPatientScreen({}) {
  const route = useRoute();
  const navigation = useNavigation();
  const {toast} = useToast();

  const [values, setValues] = useState({});

  const handleChange = (name, e) => setValues(a => ({
    ...a,
    [name]: e
  }));


  const onSumbit = () => {
    patient.post(values)
      .then(({ data }) => {
        navigation.navigate("HomeScreen");
        if (data.success === true) {
          toast({message: 'Пациент, успешно добавлен', intent: "SUCCESS"})
        }
        if (data.success === false) {
          toast({message: 'Пациент, не добвлен добавлен', intent: "ERROR"})
        }
        console.log(data)
      }).catch(e => {
      console.log(e);
    });
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: `#ffffffff` }}>
        <View style={{ backgroundColor: `#ffffff` }}>
          <TextInput
            style={[styles.text_input]}
            label={"Имя и Фамилия"}
            onChangeText={ text =>handleChange("fullname", text)}
            value={values.fullname}
            autoFocus
          />
          <TextInput
            style={styles.text_input}
            label={" Номер телефона"}
            keyboardType="phone-pad"
            dataDetectorType={"phoneNumber"}
            onChangeText={ text =>handleChange( "phone", text)}
            value={values.phone}
            autoFocus
          />
          <View style={styles.viewButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => onSumbit()}>
                <Text style={styles.touchableOpacityText}><Text>+</Text> Добавить пациента</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default AddPatientScreen;

const styles = StyleSheet.create({
  text_input: {
    marginTop: 12,
    backgroundColor: `#ffffff`,
    margin: 10,
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: Color.green,
    height: 45,
    textAlign: `center`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  viewButton: {
    flex: 1,
    marginTop: 40,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  buttonContainer: {
    flex: 0.8,
  },
  touchableOpacityText: {
    color: `#ffffff`,
    fontSize: 16,
  },

});




