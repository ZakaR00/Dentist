import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../utils/color/color';

const Action = ({callPhone, openWhatsApp, openTelegram}) => {
  return (
    <>
      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={() => callPhone()}
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: Color.grey,
          }}>
          <View>
            <MaterialCommunityIcons
              name={'phone'}
              size={30}
              color={Color.blue}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 19, color: Color.black, fontWeight: '400'}}>
              Позвонить по телефону
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openWhatsApp()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Color.grey,
          }}>
          <View>
            <MaterialCommunityIcons
              name={'whatsapp'}
              size={30}
              color={Color.green}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 19, color: Color.black, fontWeight: '400'}}>
              Написать на Whatsapp
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openTelegram()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: Color.grey,
          }}>
          <View>
            <MaterialCommunityIcons
              name={'telegram'}
              size={30}
              color={Color.blue}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 19, color: Color.black, fontWeight: '400'}}>
              Написать на Whatsapp
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Action;
