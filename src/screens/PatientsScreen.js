import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import { FAB, TextInput } from "react-native-paper";
import Appoinment from "../components/Appoinment";
import Swipe from "react-native-swipeable-row";
import Ionicons from "react-native-vector-icons/Ionicons";
import patients from "../../utils/api/patients";
import phoneFormat from "../../utils/phoneFormat";

function PatientsScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPatients = () => {
    setIsLoading(true);
    patients.get().then(({ data }) => {
      setData(data.data);
    }).finally(e => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchPatients();
  }, []);


  const patientDelete = (id) => {
    Alert.alert(
      "Удаление приема",
      "Вы действительно хотите удалить прием?",
      [
        {
          text: "Отмена",
          onPress: () => null
          ,
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setIsLoading(true);
            patients.remove(id).then(() => {
              console.log(appoinment);
              fetchPatients();
            }).catch(e => {
              console.log(" -------->" + e);
              setIsLoading(false);
            });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <>
      <View style={styles.container}>
        {data &&
        <>
          <View style={{ marginTop: 60 }}>
            <TextInput
              onChangeText={e => setFilterData(e)}
              style={{ backgroundColor: `#fff` }}
              placeholder={`Поиск пациента...`}
            />
          </View>
          <FlatList
            data={data.filter(
              item =>
                item.fullname
              .toLowerCase()
              .indexOf(filterData.toLowerCase()) >= 0,
            )}
            keyExtractor={item => item._id}
            onRefresh={() => fetchPatients()}
            refreshing={isLoading}
            renderItem={({ item }) =>
              <Swipe
                rightButtons={[
                  <TouchableOpacity onPress={() => navigation.navigate('EditingPatientScreen', {item: item})} style={styles.swipeButtonRoweEdit}>
                    <Ionicons name={"pencil"} color={`#fff`} size={28} />

                  </TouchableOpacity>,
                  <TouchableOpacity onPress={() => patientDelete(item._id)} style={styles.swipeButtonRowDelete}>
                    <Ionicons name={"close"} color={`#fff`} size={28} />
                  </TouchableOpacity>]}>
                <Appoinment item={{
                  patient: item,
                  diagnosis: phoneFormat(item.phone),
                }} />
              </Swipe>
            }
          />
        </>}
      </View>
      <FAB
        style={styles.fab}
        color={`#FFF`}
        large
        icon="plus"
        onPress={() => navigation.navigate(`AddPatientScreen`)}
      />
    </>
  );
}

export default PatientsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: "#fff",
  },
  groupTitle: {
    fontWeight: `bold`,
    fontSize: 22,
    color: `#000000`,
    marginLeft: 20,
    marginTop: 25,
    padding: 0.20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: `#2A86FF`,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  swipeButtonRowDelete: {
    backgroundColor: `#F85A5A`,
    alignItems: `center`,
    justifyContent: `center`,
    width: 80,
    height: `100%`,
  },
  swipeButtonRoweEdit: {
    backgroundColor: `#B4C1CB`,
    alignItems: `center`,
    justifyContent: `center`,
    width: 80,
    height: `100%`,
  },
});
