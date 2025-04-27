import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

const LoginInputs = (props: { label: string; placeholder: string; type: 'text' | 'password' }) => {
  const [Issecure, setIssecure] = useState(true);
  const handlesecurity = () => {
    setIssecure(!Issecure);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold">{props.label}</Text>
      <View className="relative">
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'orange'}
          secureTextEntry={props.type === 'password' ? Issecure : false}
          className="mb-4 mt-1 w-[250px] rounded-md border-2 border-gray-300 p-2"
        />

        {props.type === 'password' && (
          <TouchableOpacity className="absolute bottom-5 right-2" onPress={handlesecurity}>
            {Issecure ? (
              <Feather name="eye-off" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>


    </View>
  );
};

export default LoginInputs;
