import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import PatientScreen from "../screens/PatientScreen";
import AddPatientScreen from "../screens/AddPatientScreen";
import AddAppoinmentScreen from "../screens/AddAppoinmentScreen";
import PatientsScreen from "../screens/PatientsScreen";
import TeethShapeScreen from "../screens/TeethShapeScreen";
import EditingPatientScreen from '../screens/EditingPatientScreen'
import EditingAppoinmentScreen from "../screens/EditingAppoinmentScreen";

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{title:`Журнал приёмов`,  headerTintColor: `#2A86FF`, headerStyle: {elevation: 0.8, shadowOpacity: 0.8}}} name={`HomeScreen`} component={HomeScreen}/>
      <Stack.Screen options={{title:`Карта Клиента`, headerTintColor: `#2A86FF`,  headerTransparent: false, }} name={`PatientScreen`} component={PatientScreen}/>
      <Stack.Screen options={{title:`Добавить пациента`, headerTintColor: `#2A86FF`,  headerTransparent: false, }} name={`AddPatientScreen`} component={AddPatientScreen}/>
      <Stack.Screen options={{title:`Добавить прием`, headerTintColor: `#2A86FF`,  headerTransparent: false, }} name={`AddAppointmentScreen`} component={AddAppoinmentScreen}/>
      <Stack.Screen options={{title:`Пациенты`, headerTintColor: `#2A86FF`,   headerTransparent: false, }}  name={`PatientsScreen`} component={PatientsScreen}/>
      <Stack.Screen options={{title:`Изменить приём`, headerTintColor: `#2A86FF`,   headerTransparent: false, }} name={`EditingAppointmentScreen`} component={EditingAppoinmentScreen}/>
      <Stack.Screen options={{title:`Изменить Пациента`, headerTintColor: `#2A86FF`,   headerTransparent: false, }}  name={`EditingPatientScreen`} component={EditingPatientScreen}/>
      <Stack.Screen options={{title:`Формула Зубов`, headerTintColor: `#2A86FF`,   headerTransparent: false, }} name={`TeethShapeScreen`} component={TeethShapeScreen}/>

    </Stack.Navigator>
  )
}

export default Root;
