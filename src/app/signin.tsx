import { View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useAuth } from '@/hooks/useAuth';

export default function SignIn() {

  const { signIn } = useAuth();


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/img-bg-signin.png")} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', alignItems: "center", paddingHorizontal: 16, gap: 16 }}>
        <Image source={require("../assets/img-logo-smartcondominio.png")} />

        <View className='bg-white w-full px-3 py-3 rounded-xl gap-3' style={{elevation: 2}}>
          <TextInput placeholder='Email' className='p-3 border border-gray-300 rounded text-xl' />
          <TextInput placeholder='Senha' className='p-3 border border-gray-300 rounded text-xl' />

          <TouchableOpacity onPress={signIn} className='w-full rounded-xl'>
            <LinearGradient colors={["#24DD30", "#3D9DC7"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1}} style={{borderRadius: 4, alignItems: 'center'}}>

              <Text className='font-bold text-white text-xl py-3'>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Text className='text-slate-500'>Ou</Text>

        <View className='w-full bg-white p-3 rounded-xl gap-3' style={{elevation: 2}}>
          <View className='flex-row items-center justify-center gap-3'>
            <TouchableOpacity className='flex-1 bg-slate-800 py-2 px-3 rounded-md flex-row justify-between items-center'>
              <Text className='text-white text-lg'>Google</Text>
              <MaterialCommunityIcons name='google' color={"#fff"} size={22} />
            </TouchableOpacity>

            <TouchableOpacity className='flex-1 bg-blue-500 py-2 px-3 rounded-md flex-row justify-between items-center'>
              <Text className='text-white text-lg'>Facebook</Text>
              <MaterialCommunityIcons name='facebook' color={"#fff"} size={22} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className='bg-slate-500 p-2 items-center rounded-md'>
            <Text className='text-white text-lg'>Criar Conta</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>
    </View>
  );
}