import React, {useState, useEffect, createRef} from 'react';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import patients from '../../utils/api/patients';
import {ActivityIndicator, FAB} from 'react-native-paper';
import phoneFormat from '../../utils/phoneFormat';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet/index';
import {Color} from '../../utils/color/color';
import Action from '../components/Action';

function PatientScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const actionSheetRef = createRef();

  const [item, setItem] = useState(route.params.item);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = item.patient._id;
    console.log(id);
    patients
      .show(id)
      .then(({data}) => {
        console.log(data);
        setData(data.data.appointments);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        e.message;
      });
  }, []);

  const callPhone = () => {
    Linking.openURL(`tel:+${item.patient.phone}`);
  };

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${item.patient.phone}`);
  };

  const openTelegram = () => {
    Linking.openURL(`https://t.me/${item.patient.phone}`);
  };

  return (
    <>
      <ActionSheet ref={actionSheetRef}>
        <Action callPhone={callPhone} openWhatsApp={openWhatsApp} openTelegram={openTelegram} />
      </ActionSheet>

      <View style={{flex: 0.3, backgroundColor: '#ffffff'}}>
        <View style={styles.view_text}>
          <Text style={styles.text_name}>{item.patient.fullname}</Text>
          <Text>{phoneFormat(item.patient.phone)}</Text>
          <View style={styles.viewButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TeethShapeScreen', {item: item})
                }
                style={styles.touchableOpacity}>
                <Text style={styles.touchableOpacityText}>Формула зубов</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainerPlus}>
              <TouchableOpacity
                onPress={() => actionSheetRef.current?.setModalVisible()}
                style={styles.touchableOpacityPlus}>
                <MaterialCommunityIcons
                  name={'phone'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.patienAppointments}>
        <View style={styles.view_text}>
          {isLoading ? (
            <ActivityIndicator size={35} color={'#2A86FF'} />
          ) : (
            data.map(item => (
              <View style={styles.appointmentCard}>
                <View style={styles.appoinmentCardRow}>
                  <MaterialCommunityIcons
                    name={'tooth'}
                    size={16}
                    color={'#A3A3A3'}
                  />
                  <Text style={styles.toothText}>
                    Зуб:{' '}
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>
                      {item.dentNumber}
                    </Text>
                  </Text>
                </View>
                <View style={styles.appoinmentCardRow}>
                  <MaterialCommunityIcons
                    name={'heart'}
                    size={16}
                    color={'#A3A3A3'}
                  />
                  <Text style={styles.toothText}>
                    Диагноз:{' '}
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>
                      {' '}
                      {item.diagnosis}
                    </Text>
                  </Text>
                </View>
                <View style={styles.appoinmentCardRow}>
                  <Text style={styles.groupDate}>
                    {item.date} - <Text>{item.time}</Text>
                  </Text>
                  <Text style={styles.groupDate2}>{item.price} С</Text>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
      <FAB
        style={styles.fab}
        color={'#FFF'}
        large
        icon="plus"
        onPress={() =>
          navigation.navigate('AddAppoinmentScreen', {
            item: item.patient._id,
          })
        }
      />
    </>
  );
}

export default PatientScreen;

const styles = StyleSheet.create({
  text_name: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    marginBottom: 3,
  },
  view_text: {
    padding: 25,
  },
  phoneText: {
    fontSize: 16,
    color: '#8b979f',
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
  touchableOpacityPlus: {
    borderRadius: 30,
    backgroundColor: '#84D269',
    height: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
  },
  touchableOpacityText: {
    color: '#ffffff',
    fontSize: 16,
  },
  viewButton: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerPlus: {
    width: 45,
    marginLeft: 10,
  },
  patienAppointments: {
    flex: 1,
  },
  appointmentCard: {
    shadowColor: 'gray',
    elevation: 0.5,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: 20,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  toothText: {
    fontSize: 16,
    marginLeft: 10,
  },
  appoinmentCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3.5,
    marginTop: 3.5,
  },
  groupDate: {
    marginTop: 7,
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#4294FF',
    fontSize: 14,
    fontWeight: 'bold',
    width: '55%',
    height: 32,
    marginRight: 23,
    color: '#FFFFFF',
  },
  groupDate2: {
    position: 'absolute',
    right: 13,
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#86E58E45',
    fontSize: 14,
    fontWeight: 'bold',
    width: 72,
    height: 32,
    color: '#84D269',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2A86FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  actionContainer: {},
});
