import MenuOptions from '@/components/menuOption';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Mais() {

  const insets = useSafeAreaInsets()


  return (
    <ScrollView className='flex-1 bg-slate-100'>

      <View className='bg-green-500' style={{ paddingTop: insets.top }}>
        <View className='flex-row p-4 gap-2 rounded-2xl items-center'>
          <TouchableOpacity>
            <MaterialIcons name='person' color={"#22c55e"} size={32} style={{ backgroundColor: "#f0fdf4", borderRadius: 999, padding: 6 }} />
          </TouchableOpacity>
          <View >
            <Text className='text-white font-bold text-xl'>Raphael dos Santos</Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='text-green-200 gap-2 '>Ver Perfil</Text>
              <MaterialIcons name='keyboard-double-arrow-right' size={20} color={"#bbf7d0"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='bg-green-50 rounded-xl m-4 flex-row justify-between overflow-hidden'>

          <View className='p-4'>
            <Text className='text-green-700 font-bold'>2B - 11</Text>
            <Text>Situação: <Text className='font-bold'>Em dia</Text></Text>
          </View>
          <TouchableOpacity className='bg-green-700 items-center justify-center p-4'>
            <Text className='text-white'>Ver Mais</Text>
          </TouchableOpacity>

        </View>

      </View>

      <MenuOptions title='Início' icone='home' navegar='/' />
      <MenuOptions title='Ajuda' icone='help-box-multiple-outline' navegar='/' />

      <View className='h-0.5 bg-slate-200 rounded-full mx-4' />

      <View>
        <Text className='py-2 px-4 text-slate-700 font-bold'>Menu</Text>

        <MenuOptions title='Reservar Espaço' icone='bookmark-box-multiple-outline' navegar='/' />
        <MenuOptions title='Autorizar Visitante' icone='checkbox-multiple-marked-circle' navegar='/' />
        <MenuOptions title='Mural de Avisos' icone='card-multiple' navegar='/' />
        <MenuOptions title='Reportar Ocorrências' icone='block-helper' navegar='/' />
        <MenuOptions title='Útilidade Pública' icone='block-helper' navegar='/' />
        <MenuOptions title='Finanças' icone='cash' navegar='/' />



      </View>


    </ScrollView>
  );
}