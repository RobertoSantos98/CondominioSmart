import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type InputProps = {
    name: string;
    icone: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    placeholder?: string;
    secureTextEntry?: boolean;
}

export default function Input({ name, icone, placeholder, secureTextEntry }: InputProps) {
  return (
    <View className='gap-1.5'>
        <Text className='ml-1 text-slate-700 font-semibold text-xs'>{name}</Text>
        <View className='items-center bg-slate-50 flex-row border border-slate-200/80 rounded-xl px-3 py-2.5 focus:border-green-500'>
          <MaterialCommunityIcons name={icone} size={20} color={"#22c55e"} style={{ marginRight: 8 }}/>
          
          <TextInput 
            className='text-slate-800 flex-1 p-0 m-0 text-sm'
            placeholder={placeholder}
            placeholderTextColor="#94a3b8"
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
        </View>
    </View>
  );
}