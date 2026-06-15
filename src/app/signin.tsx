import { View, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Shadow } from "react-native-shadow-2";

import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/textInput';

export default function SignIn() {

  const { signIn } = useAuth();


  return (
    <View style={{ flex: 1 }} className='bg-green-500'>

      <View style={{ flex: 1 }} className='justify-center items-center bg-green-500'>

        {/* <LinearGradient
          colors={["#166534", "#22c55e"]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        /> */}

        <View className='bg-green-700 h-56 w-56 rounded-full absolute -left-14 -top-24' />
        <View className='bg-green-600 h-56 w-56 rounded-full absolute -right-20 -bottom-20' />

        <View className='bg-white rounded-full p-6'>
          <Image source={require("../assets/img-logo-smartcondominio.png")} style={{ height: 90, width: 90 }} />
        </View>
      </View>

      <View className='bg-white w-full px-4 py-4 rounded-3xl gap-4' style={{ elevation: 2, flex: 2 }}>

        <View className='flex-row gap-2 self-center'>
          <View className='h-[4px] w-[50px] rounded-full bg-gray-300' />
        </View>

        {/* <View className='h-[1px] bg-gray-100 w-full' /> */}

        <View className='px-2'>
          <Text className='text-2xl font-bold'>Bem Vindo, <Text className='text-green-500 font-bold'>Morador!</Text></Text>
          <Text className='text-slate-400'>Entre com sua conta</Text>
        </View>

        <Input name='Email' icone='email' />
        <Input name='Senha' icone='security' />
        <TouchableOpacity><Text className='text-blue-400 font-bold self-end px-2'>Esqueceu a senha?</Text></TouchableOpacity>

        {/* <TextInput placeholder='Email' className='p-3 border border-gray-300 rounded text-xl' />
          <TextInput placeholder='Senha' className='p-3 border border-gray-300 rounded text-xl' /> */}

        <Shadow
          distance={10}
          startColor="rgba(34, 197, 94, 0.2)"
          containerStyle={{
            width: "100%",
          }}
          style={{ alignSelf: 'stretch' }}
        >
          <TouchableOpacity
            onPress={signIn}
            activeOpacity={0.8}
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 16,
              overflow: 'hidden',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <LinearGradient
              colors={["#22c55e", "#3D9DC7"]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <Text className="font-bold text-white text-xl z-10">
              Entrar
            </Text>

            <MaterialCommunityIcons
              name="arrow-right-bold"
              size={16}
              color="#FFF"
              style={{ marginLeft: 6, zIndex: 10 }}
            />

          </TouchableOpacity>
        </Shadow>

        <View className='flex-row gap-2 items-center w-full justify-center'>
          <View className='h-[1px] bg-slate-200 flex-1' />
          <Text className='text-slate-500 self-center'>Ou</Text>
          <View className='h-[1px] bg-slate-200 flex-1' />
        </View>


        <View className='flex-row items-center justify-center gap-3'>
          <TouchableOpacity className='flex-1 bg-red-100 p-3 rounded-2xl flex-row justify-between items-center border border-red-800'>
            <Text className='text-red-800 text-lg'>Google</Text>
            <MaterialCommunityIcons name='google' color={"#991b1b"} size={22} />
          </TouchableOpacity>

          <TouchableOpacity className='flex-1 bg-blue-100 p-3 rounded-2xl flex-row justify-between items-center border border-blue-500'>
            <Text className='text-blue-500 text-lg'>Facebook</Text>
            <MaterialCommunityIcons name='facebook' color={"#3b82f6"} size={22} />
          </TouchableOpacity>
        </View>

        <View className='flex-row self-center items-center'>
          <Text>Não tem uma conta? </Text>
          <TouchableOpacity className=''>
            <Text className='text-green-500 text-lg'>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 
        <View className='w-full bg-white p-3 rounded-xl gap-3' style={{ elevation: 2 }}>
        </View> */}

    </View>
  );
}