import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from "react-native-datepicker";
import appoinment from "../../utils/api/appoinment";
import { useToast } from "react-native-styled-toast";
import { Color } from "../../utils/color/color";


function AddAppoinmentScreen({ route, navigation }) {

  const { item } = route.params;
  const {toast} = useToast();

  const [values, setValues] = useState({
    diagnosis: "",
    dentNumber: "",
    price: "",
    date: null,
    time: null,
    patient: route.params.item,
  });

  const fieldsName = {
    diagnosis: "Диагноз",
    dentNumber: "Номер Зуба",
    price: "Цена",
    date: "Дата",
    time: "Время",
  };

  const setFiledValue = (name, value) =>
    setValues({
      ...values,
      [name]: value,
    });

  const handleInputChange = (name, value) => {
    setFiledValue(name, value);
  };


  const onSumbit = () => {
    appoinment.post(values)
      .then(({data}) => {
        navigation.navigate("HomeScreen");
        if (data.success === true) {
          toast({message: 'Прием, успешно добавлен', intent: "SUCCESS"})
        } else if (data.message === 'PATIENT_NOT_FOUND') {
          toast({message: 'Пацинет, не найден', intent: "ERROR"})
        }
        if (data.success === false) {
          toast({message: 'Прием, не добавлен', intent: "ERROR"})
        }       console.log(values);
      }).catch(e => {
      if (e.response && e.response.data.message) {
        e.response.data.message.forEach(error => {
          const fieldName = error.param;
          Alert.alert(`Ошибка!`, `Поле "${fieldsName[fieldName]}" указано неверено.`);
        });
      }
    });
  };



  return (
    <>
      <View style={{ flex: 1, backgroundColor: `#ffffffff` }}>
        <View style={{ backgroundColor: `#ffffff` }}>
          <TextInput
            style={[styles.text_input]}
            label={"Номер зуба"}
            onChangeText={(text => handleInputChange("dentNumber", text))}
            value={values.dentNumber}
            keyboardType="phone-pad"
            autoFocus
          />
          <View style={{ flexDirection: `row` }}>
            <View style={{ width: `100%` }}>
              <TextInput
                style={[styles.text_input]}
                label={"Диагноз"}
                onChangeText={text => setFiledValue("diagnosis", text)}
                value={values.diagnosis}
                autoFocus
              />
            </View>
          </View>

          <TextInput
            style={styles.text_input}
            label={"Цена"}
            keyboardType="phone-pad"
            dataDetectorType={"phoneNumber"}
            onChangeText={text => setFiledValue("price", text)}
            value={values.price}
            autoFocus
          />
          <View style={{ flexDirection: `row`, width: `70%`, marginTop: 17 }}>
            <View style={{ width: `70%`, marginLeft: 9 }}>
              <DatePicker
                style={{ width: `100%` }}
                date={new Date()}
                mode="date"
                placeholder="Дата"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Сохранить"
                cancelBtnText="Отмена"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    borderBottomWidth: 0.8,
                    marginTop: "36%",
                  },
                  dateText: {
                    fontSize: 17,
                  },
                }}
                date={values.date}
                onDateChange={text => setFiledValue("date", text)}
              />
            </View>
            <View style={{ width: `70%`, marginLeft: 0 }}>
              <TextInput
                style={{
                  marginTop: 12,
                  backgroundColor: `#ffffff`,
                  margin: 10,
                  marginBottom: 5,
                }}
                label={"Время"}
                onChangeText={text => setFiledValue("time", text)}
                value={values.time}
                autoFocus
              />
              {/*<DatePicker*/}
              {/*  style={{ width: `100%` }}*/}
              {/*  date={new Date()}*/}
              {/*  mode="time"*/}
              {/*  placeholder="Время"*/}
              {/*  format="YYYY-MM-DD"*/}
              {/*  minDate={new Date()}*/}
              {/*  confirmBtnText="Сохранить"*/}
              {/*  cancelBtnText="Отмена"*/}
              {/*  showIcon={false}*/}
              {/*  customStyles={{*/}
              {/*    dateInput: {*/}
              {/*      borderWidth: 0,*/}
              {/*      borderBottomWidth: 1*/}
              {/*    },*/}
              {/*  }}*/}
              {/*  date={values.date}*/}
              {/*  onDateChangeText={text => setFiledValue( "time", text )}*/}
              {/*/>*/}
            </View>
          </View>
          <View style={styles.viewButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => onSumbit()}>
                <Text style={styles.touchableOpacityText}><Text>+</Text> Добавить пациента</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default AddAppoinmentScreen;

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
