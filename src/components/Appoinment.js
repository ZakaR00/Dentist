import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import StatusBar from '../components/StatusBar';
import gevAvatarColor from '../../utils/gevAvatarColor';
import {useNavigation} from '@react-navigation/native';

const Appoinment = ({item}) => {
  const {patient, diagnosis, time, price, dentNumber, date} = item;
  const avatarColor = gevAvatarColor(patient.fullname[0].toUpperCase());
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          size={30}
          icon={'account-group'}
          onPress={() => navigation.navigate('PatientsScreen')}
        />
      ),
    });
  }, []);

  return (
    <>
      <StatusBar />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PatientScreen', {item: item});
        }}
        style={styles.groupItem}>
        <Avatar.Text
          labelStyle={{textAlign: 'center'}}
          style={{
            marginRight: 15,
            backgroundColor: avatarColor.background,
          }}
          size={45}
          color={avatarColor.color}
          label={patient.fullname[0].toUpperCase()}
        />
        <View style={{flex: 1}}>
          <Text style={styles.fullName}>{patient.fullname}</Text>
          <Text style={styles.grayText}>{diagnosis}</Text>
        </View>
        {time && <Text style={styles.groupDate}>{time}</Text>}
      </TouchableOpacity>
    </>
  );
};

Appoinment.defaultProps = {
  title: 'Unitiled',
  items: [],
};

export default Appoinment;

const styles = StyleSheet.create({
  groupItem: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d2dbde',
  },
  groupDate: {
    // position: `absolute`,
    // right: 10,
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#e9f5ff',
    fontSize: 14,
    fontWeight: 'bold',
    width: 72,
    height: 32,
    color: '#4294ff',
    marginLeft: 10,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000000',
  },
  grayText: {
    fontSize: 16,
    color: '#8B979F',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
  },
});
