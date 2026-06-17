import MenuOptions from '@/components/menuOption';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Mais() {

  const insets = useSafeAreaInsets()


  return (
    <ScrollView className='flex-1 bg-slate-100'>

      <View className='bg-green-500 rounded-b-2xl pb-2' style={{ paddingTop: insets.top }}>

        <View className='flex-row p-4 gap-3 items-center'>
          <TouchableOpacity activeOpacity={0.8}>
            <MaterialIcons name='person' color={"#22c55e"} size={32} style={{ backgroundColor: "#f0fdf4", borderRadius: 999, padding: 8 }} />
          </TouchableOpacity>

          <View className='flex-1'>
            <Text className='text-white font-extrabold text-lg'>Raphael dos Santos</Text>
            <TouchableOpacity className='flex-row items-center mt-0.5' onPress={() => router.push('/verPerfil')}>
              <Text className='text-green-200 gap-2 '>Ver Perfil</Text>
              <MaterialIcons name='keyboard-arrow-right' size={16} color={"#bbf7d0"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='bg-white rounded-2xl m-4 flex-row justify-between items-center'>

          <View className='p-4 gap-0.5'>
            <Text className='text-green-600 font-extrabold text-base'>Bloco 2B - Apto 11</Text>
            <Text className='text-slate-500 text-xs font-medium'>Financeiro: <Text className='text-green-600 font-bold'>Em dia</Text></Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} className='bg-green-600/10 px-5 rounded-xl mr-4 active:bg-green-600/20 items-center justify-center p-4'>
            <Text className='text-green-700 font-bold text-xs'>Ver Mais</Text>
          </TouchableOpacity>

        </View>

      </View>


      <View className="mt-4">
        <Text className='pb-1 px-4 text-slate-400 font-bold text-xs uppercase tracking-wider'>Minha Unidade</Text>
        <MenuOptions title='Moradores e Dependentes' icone='account-group-outline' navegar='/' />
        <MenuOptions title='Meus Veículos' icone='car-outline' navegar='/' />
        <MenuOptions title='Meus Pets' icone='paw-outline' navegar='/' />
      </View>


      <View className="mt-4">
        <Text className='pb-1 px-4 text-slate-400 font-bold text-xs uppercase tracking-wider'>Preferências</Text>
        <MenuOptions title='Configurar Notificações' icone='bell-cog-outline' navegar='/' />
        <MenuOptions title='Segurança e Biometria' icone='fingerprint' navegar='/' />
      </View>


      <View className="mt-4">
        <Text className='pb-1 px-4 text-slate-400 font-bold text-xs uppercase tracking-wider'>Suporte e Legal</Text>
        <MenuOptions title='Termos de Uso' icone='file-document-outline' navegar='/' />
        <MenuOptions title='Política de Privacidade' icone='shield-check-outline' navegar='/' />
      </View>


      <View className="items-center justify-center py-6">
        <Text className="text-slate-300 text-xs font-medium">Condominio Inteligente • Versão 0.0.1</Text>
      </View>


    </ScrollView>
  );
}