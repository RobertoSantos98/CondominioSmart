import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { compromissos } from '@/mocks/condominioDataMocks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const configPorTipo = {
  eventos: { label: 'Comunicado Geral', icone: 'wrench-outline', cor: '#ef4444', bg: '#fef2f2' },
  visitante: { label: 'Controle de Visitante', icone: 'truck-delivery-outline', cor: '#3b82f6', bg: '#eff6ff' },
  minhasReservas: { label: 'Reserva de Espaço', icone: 'glass-cocktail', cor: '#22c55e', bg: '#f0fdf4' },
  assembleia: { label: 'Assembleia Condominial', icone: 'gavel', cor: '#a855f7', bg: '#f3e8ff' }
};

export default function DetalhesEvento() {

  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();


  const evento = compromissos.find(c => c.id === id);
  if(!evento) return <NoEvent/>


  const uiStyle = configPorTipo[evento.tipo as keyof typeof configPorTipo]




 return (
   <View className='bg-white flex-1'>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: insets.bottom + 40}} >

    <View className='h-72 w-full relative bg-slate-900 opacity-90'>
      <Image source={{ uri: evento?.imagem }} className='h-full w-full opacity-90' resizeMode='cover' />

      <LinearGradient colors={['rgb(0, 0, 0, 0.5)', 'transparent']} className='absolute top-0 bottom-0 right-0 left-0' />

      <TouchableOpacity style={{top: insets.top + 10}} className='absolute left-4 bg-white/90 backdrop-blur-md rounded-full p-2.5' onPress={() => router.back()}>
        <MaterialCommunityIcons name='arrow-left' size={22} color={"#1e293b"} />
      </TouchableOpacity>

    </View>

    <View className='px-5 pt-6 gap-6'>

      <View className='flex-row justify-between items-center'>
        <View className='px-3 py-1.5 flex-row gap-1 items-center rounded-xl' style={{backgroundColor: uiStyle.bg}}>
          <MaterialCommunityIcons name={uiStyle.icone} size={12} color={uiStyle.cor} />
          <Text className='text-xs uppercase font-black tracking-wider' style={{color: uiStyle.cor}}>{uiStyle.label}</Text>
        </View>


        <View className='bg-slate-100 px-3 py-1.5 rounded-xl'>
          <Text className='text-slate-600 text-xs font-bold uppercase'>{evento?.status}</Text>
        </View>
      </View>

      <Text className='text-2xl font-bold text-slate-800 leading-tight'>{evento.titulo}</Text>

      <View className="h-[1px] bg-slate-100 w-full" />

      


    </View>


    </ScrollView>
   </View>
  );
}

const NoEvent = () => {
  return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-slate-500 font-bold">Evento não encontrado.</Text>
      </View>
  )
}