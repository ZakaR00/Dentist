import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';
import {FAB} from 'react-native-paper';
import Appoinment from '../components/Appoinment';
import Swipe from 'react-native-swipeable-row';
import Ionicons from 'react-native-vector-icons/Ionicons';
import appoinment from '../../utils/api/appoinment';
import EditingPatientScreen from './EditingPatientScreen';

import {useNavigation} from '@react-navigation/native';
import ListFooterComponent from '../components/ListEmpryComponent';

function HomeScreen() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  const fetchAppoinments = () => {
    setIsLoading(true);
    setLastUpdateTime(new Date());
    appoinment
      .get()
      .then(({data}) => {
        setData(data.data);
        console.log(data);
      })
      .finally(e => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAppoinments();
  }, []);

  // useEffect(fetchAppoinments,[ props.navigation.state.params])

  const removeAppointment = id => {
    Alert.alert('Удаление приема', 'Вы действительно хотите удалить ?', [
      {
        text: 'Отмена',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Удалить',
        onPress: () => {
          setIsLoading(true);
          console.log(id);
          appoinment
            .remove(id)
            .then(() => {
              fetchAppoinments();
            })
            .catch(e => {
              setIsLoading(false);
            });
        },
      },
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        {data && (
          <SectionList
            sections={data}
            keyExtractor={item => item._id}
            onRefresh={() => fetchAppoinments()}
            refreshing={isLoading}
            ListEmptyComponent={ListFooterComponent}
            renderItem={({item}) => (
              <Swipe
                rightButtons={[
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('EditingAppointmentScreen', {
                        item: item,
                      })
                    }
                    style={styles.swipeButtonRoweEdit}>
                    <Ionicons name={'pencil'} color={'#fff'} size={28} />
                  </TouchableOpacity>,
                  <TouchableOpacity
                    onPress={() => removeAppointment(item._id)}
                    style={styles.swipeButtonRowDelete}>
                    <Ionicons name={'close'} color={'#fff'} size={28} />
                  </TouchableOpacity>,
                ]}>
                <Appoinment item={item} />
              </Swipe>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.groupTitle}>{title}</Text>
            )}
          />
        )}
      </View>
      <FAB
        style={styles.fab}
        color={'#FFF'}
        large
        icon="plus"
        onPress={() => navigation.navigate('AddPatientScreen')}
      />
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: '#fff',
  },
  groupTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
    marginLeft: 20,
    marginTop: 25,
    padding: 0.2,
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
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  swipeButtonRowDelete: {
    backgroundColor: '#F85A5A',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: '100%',
  },
  swipeButtonRoweEdit: {
    backgroundColor: '#B4C1CB',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: '100%',
  },
});
