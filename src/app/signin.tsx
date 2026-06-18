import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Shadow } from "react-native-shadow-2";

import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/textInput';


export default function SignIn() {
  const { signIn } = useAuth();

  return (
    
    <ScrollView className='flex-1 bg-green-500' contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      
      
      <View className='justify-center items-center bg-green-500 relative overflow-hidden' style={{ flex: 1, minHeight: 220 }}>
        
        <View className='bg-green-600/40 h-56 w-56 rounded-full absolute -left-14 -top-24' />
        <View className='bg-green-400/30 h-48 w-48 rounded-full absolute -right-14 -bottom-10' />

        <View className='bg-white rounded-full p-5 shadow-sm border border-green-400/20' style={{ elevation: 4 }}>
          <Image 
            source={require("../assets/img-logo-smartcondominio.png")} 
            style={{ height: 80, width: 80 }} 
            resizeMode="contain"
          />
        </View>
      </View>

      
      <View className='bg-white w-full px-5 pt-6 pb-8 rounded-t-[32px] gap-4 shadow-xl' style={{ elevation: 16, flex: 2 }}>
        
        
        <View className='h-1 w-12 rounded-full bg-slate-200 self-center mb-2' />

      
        <View className='px-1 mb-2'>
          <Text className='text-2xl font-extrabold text-slate-800'>
            Bem-vindo, <Text className='text-green-500'>Morador!</Text>
          </Text>
          <Text className='text-slate-400 text-sm font-medium mt-0.5'>Entre para gerenciar o seu condomínio</Text>
        </View>

      
        <Input name='E-mail' icone='email-outline' placeholder="exemplo@email.com" />
        
        <View className="gap-1.5">
          <Input name='Senha' icone='lock-outline' placeholder="Digite sua senha" secureTextEntry />
          <TouchableOpacity className='self-end px-1 mt-1'>
            <Text className='text-green-600 font-bold text-xs'>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-2">
          <Shadow
            distance={8}
            startColor="rgba(34, 197, 94, 0.20)"
            containerStyle={{ width: "100%" }}
            style={{ alignSelf: 'stretch', borderRadius: 16 }}
          >
            <TouchableOpacity
              onPress={signIn}
              activeOpacity={0.8}
              className="rounded-xl overflow-hidden flex-row justify-center items-center p-4 relative"
            >
              <LinearGradient
                colors={["#22c55e", "#3D9DC7"]}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
              <Text className="font-bold text-white text-base z-10">
                Entrar no Aplicativo
              </Text>
              <MaterialCommunityIcons
                name="arrow-right"
                size={18}
                color="#FFF"
                style={{ marginLeft: 6, zIndex: 10 }}
              />
            </TouchableOpacity>
          </Shadow>
        </View>

        <View className='flex-row items-center w-full justify-center my-2'>
          <View className='h-[1px] bg-slate-100 flex-1' />
          <Text className='text-slate-400 font-bold text-xs px-3 uppercase tracking-wider'>Ou entre com</Text>
          <View className='h-[1px] bg-slate-100 flex-1' />
        </View>

        
        <View className='flex-row items-center justify-center gap-3'>
          <TouchableOpacity className='flex-1 bg-slate-50 border border-slate-200 p-3 rounded-xl flex-row justify-center items-center gap-2 active:bg-slate-100'>
            <MaterialCommunityIcons name='google' color={"#ea4335"} size={20} />
            <Text className='text-slate-700 font-bold text-sm'>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex-1 bg-slate-50 border border-slate-200 p-3 rounded-xl flex-row justify-center items-center gap-2 active:bg-slate-100'>
            <MaterialCommunityIcons name='facebook' color={"#1877f2"} size={20} />
            <Text className='text-slate-700 font-bold text-sm'>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View className='flex-row self-center items-center mt-4'>
          <Text className="text-slate-500 text-sm">Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text className='text-green-500 font-bold text-sm'>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}