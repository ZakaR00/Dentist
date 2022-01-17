import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import appoinment from '../../utils/api/appoinment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useToast} from 'react-native-styled-toast';

function EditingAppoinmentScreen({route, navigation}) {
  const {item} = route.params;
  const {toast} = useToast();

  const [values, setValues] = useState({
    diagnosis: '',
    dentNumber: '',
    price: '',
    date: null,
    time: null,
    patient: route.params.item,
  });

  const fieldsName = {
    diagnosis: 'Диагноз',
    dentNumber: 'Номер Зуба',
    price: 'Цена',
    date: 'Дата',
    time: 'Время',
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
    appoinment
      .post(values)
      .then(({data}) => {
        navigation.navigate('HomeScreen', {lastUpdate: new Date()});
        if (data.success === true) {
          toast({message: 'Успешно изменено', intent: 'SUCCESS'});
        }
        else if (data.success === false) {
          toast({message: 'Данные не изменились', intent: 'ERROR'});
        }
        console.log(values);
      })
      .catch(e => {
        if (e.response && e.response.data.message) {
          e.response.data.message.forEach(error => {
            const fieldName = error.param;
            Alert.alert(
              'Ошибка!',
              `Поле "${fieldsName[fieldName]}" указано неверено.`,
            );
          });
        }
      });
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffffff'}}>
        <View style={{backgroundColor: '#ffffff'}}>
          <TextInput
            style={[styles.text_input]}
            label={'Номер зуба'}
            onChangeText={text => handleInputChange('dentNumber', text)}
            value={item.dentNumber}
            keyboardType="phone-pad"
            autoFocus
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <TextInput
                style={[styles.text_input]}
                label={'Диагноз'}
                onChangeText={text => setFiledValue('diagnosis', text)}
                value={item.diagnosis}
                autoFocus
              />
            </View>
          </View>

          <TextInput
            style={styles.text_input}
            label={'Цена'}
            keyboardType="phone-pad"
            dataDetectorType={'phoneNumber'}
            onChangeText={text => setFiledValue('price', text)}
            value={item.price}
            autoFocus
          />
          <View style={{flexDirection: 'row', width: '70%', marginTop: 17}}>
            <View style={{width: '70%', marginLeft: 9}}>
              <DatePicker
                style={{width: '100%'}}
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
                    marginTop: '36%',
                  },
                  dateText: {
                    fontSize: 17,
                  },
                }}
                date={item.date}
                onDateChange={text => setFiledValue('date', text)}
              />
            </View>
            <View style={{width: '70%', marginLeft: 0}}>
              <TextInput
                style={{
                  marginTop: 12,
                  backgroundColor: '#ffffff',
                  margin: 10,
                  marginBottom: 5,
                }}
                label={'Время'}
                onChangeText={text => setFiledValue('time', text)}
                value={item.time}
                autoFocus
              />
            </View>
          </View>
          <View style={styles.viewButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => onSumbit()}>
                <Text style={styles.touchableOpacityText}>
                  <MaterialIcons name={'done'} size={17} />
                  Сохрнить
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default EditingAppoinmentScreen;

const styles = StyleSheet.create({
  text_input: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: '#2A86FF',
    height: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.8,
  },
  touchableOpacityText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
