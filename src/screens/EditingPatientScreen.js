import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRoute } from "@react-navigation/native";
import { FAB, TextInput } from "react-native-paper";
import patient from "../../utils/api/patients";


function EditingPatientScreen({route, navigation}) {

  const {item} = route.params;

  const [values, setValues] = useState({});

  const handleChange = (name, e) => setValues(a => ({
    ...a,
    [name]: e
  }));


  const onSumbit = (id) => {
    Alert.alert('Упс...', 'Извините! Это страница в стадии разработки')
    // console.log(id)
    // patient.put(id)
    //   .then(({ data }) => {
    //     navigation.navigate("HomeScreen");
    //     console.log(values)
    //   }).catch(e => {
    //   console.log(e);
    // });
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
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => onSumbit(item._id)}>
                <Text style={styles.touchableOpacityText}><MaterialIcons name={"done"} size={17}/> Сохранить</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default EditingPatientScreen;

const styles = StyleSheet.create({
  text_input: {
    marginTop: 12,
    backgroundColor: `#ffffff`,
    margin: 10,
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: `#2A86FF`,
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
