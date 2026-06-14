import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Mais() {

  const insets = useSafeAreaInsets()


  return (
    <View className='flex-1 bg-slate-100'>

      <View className='bg-green-500' style={{ paddingTop: insets.top }}>
        <View className='flex-row p-4 gap-2'>
          <TouchableOpacity>
            <MaterialIcons name='person' color={"#22c55e"} size={32} style={{ backgroundColor: "#FFF", borderRadius: 999, padding: 6 }} />
          </TouchableOpacity>
          <View>
            <Text className='text-white font-bold text-xl'>Raphael dos Santos</Text>
            <Text className='text-white'>Apartamento: 2B - 11</Text>
            <TouchableOpacity className='flex-row'>
              <Text className='text-green-700 gap-2 '>Ver Perfil</Text>
              <MaterialIcons name='keyboard-double-arrow-right' size={20} color={"#15803d"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity className='py-4 flex-row items-center gap-2'>
        <MaterialCommunityIcons name='home' size={24} color={"#334155"} style={{ marginHorizontal: 16 }} />
        <Text className='text-slate-700'>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.2} className='py-4 flex-row items-center gap-2'>
        <MaterialCommunityIcons name='help-box-multiple-outline' size={24} color={"#334155"} style={{ marginHorizontal: 16 }} />
        <Text className='text-slate-700'>Ajuda</Text>
      </TouchableOpacity>

      <View className='h-0.5 bg-slate-200 rounded-full mx-4' />

      <View>
        <Text className='py-2 px-4 text-slate-700 font-bold'>Menu</Text>
        <TouchableOpacity className='py-4 flex-row items-center gap-2'>
          <MaterialCommunityIcons name='home' size={24} color={"#334155"} style={{ marginHorizontal: 16 }} />
          <Text className='text-slate-700'>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.2} className='py-4 flex-row items-center gap-2'>
          <MaterialCommunityIcons name='help-box-multiple-outline' size={24} color={"#334155"} style={{ marginHorizontal: 16 }} />
          <Text className='text-slate-700'>Ajuda</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}