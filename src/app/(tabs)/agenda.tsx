import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { compromissos } from '@/mocks/condominioDataMocks';
import { LinearGradient } from 'expo-linear-gradient';

export default function Agenda() {

  const insets = useSafeAreaInsets();

  const [filtroSelecionado, setFiltroSelecionado] = useState('todos');

  const filtros = [
    { id: 'todos', label: 'Todos' },
    { id: 'minhasReservas', label: 'Minhas Reservas' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'visitante', label: 'Visitantes' }
  ]

  const handleAlterarFiltro = (id: string) => {
    setFiltroSelecionado(id);
  }

  const dadosFiltrados = filtroSelecionado === 'todos' ? compromissos : compromissos.filter(item => item.tipo === filtroSelecionado)



  return (
    <View className='bg-slate-100 flex-1'>

      <View className='bg-green-500 pb-6 rounded-b-2xl  ' style={{ paddingTop: insets.top, elevation: 2 }}>
        <View className='px-5 pt-4 flex-row gap-4 items-center'>
          <MaterialCommunityIcons name='calendar' size={28} color={"#FFF"} />
          <View className=''>
            <Text className='text-white text-2xl font-extrabold'>Minha Agenda</Text>
            <Text className='text-white text-xs mt-0.5'>Compromissos e comunicados de sua unidade</Text>
          </View>
        </View>
      </View>

      {/* Filtros Horizontais */}
      <View>
        <View className='py-4 absolute z-10 px-4 w-full'>
          <LinearGradient
            colors={["#f1f5f9", "transparent"]}
            style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
          <ScrollView
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {filtros.map((f) => {
              const isActive = filtroSelecionado === f.id;

              return (
                <TouchableOpacity
                  key={f.id}
                  onPress={() => setFiltroSelecionado(f.id)}
                  className="py-2 px-4 rounded-full mr-2 border"

                  style={{
                    backgroundColor: isActive ? '#22c55e' : '#ffffff', // green-500 ou white
                    borderColor: isActive ? '#22c55e' : '#e2e8f0',     // green-500 ou slate-200
                    shadowColor: '#000',
                    elevation: isActive ? 2 : 0,
                  }}
                  activeOpacity={0.7}
                >
                  <Text
                    className="text-xs"
                    style={{
                      color: isActive ? '#ffffff' : '#64748b',         // white ou slate-500
                      fontWeight: isActive ? 'bold' : '600',
                    }}
                  >
                    {f.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <FlatList
          data={dadosFiltrados}
          renderItem={({ item }) => <RenderMinhaAgenda id={item.id} tipo={item.tipo} status={item.status} img={item.imagem} titulo={item.titulo} descricao={item.descricao} dateTime={item.dateTime} />}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 62,
            paddingBottom: 100
          }}
        />
      </View>



    </View>
  );
}

type RenderMinhaAgendaProps = {
  id: string,
  img: string;
  titulo: string;
  descricao: string;
  dateTime: string; // ISO String vinda da API / Mock
  tipo: 'eventos' | 'minhasReservas' | 'visitante' | 'assembleia';
  status: 'Aguardando' | 'Obrigatorio' | 'Confirmado' | 'Obrigatorio'
};

const configPorTipo = {
  eventos: { label: 'Comunicado', icone: 'wrench-outline', cor: '#ef4444', bg: '#fef2f2' },
  visitante: { label: 'Visitante', icone: 'truck-delivery-outline', cor: '#3b82f6', bg: '#eff6ff' },
  minhasReservas: { label: 'Minha Reserva', icone: 'glass-cocktail', cor: '#22c55e', bg: '#f0fdf4' },
  assembleia: { label: 'Assembleia', icone: 'gavel', cor: '#a855f7', bg: '#f3e8ff' }
};

const RenderMinhaAgenda = ({ img, titulo, descricao, dateTime, tipo, status, id }: RenderMinhaAgendaProps) => {

  const uiStyle = configPorTipo[tipo as keyof typeof configPorTipo];
  const router = useRouter();

  function DataFormatada(dateTime: string) {
    if (!dateTime) return "";
    const data = new Date(dateTime).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', });
    const hora = new Date(dateTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${data} às ${hora}`
  }

  return (
    <View className='p-1 bg-white rounded-2xl mb-4' style={{ elevation: 2 }}>

      {status === 'Obrigatorio' && (
        <View className='absolute px-2 py-1 rounded-2xl bg-red-500 right-4 top-4 z-10'>
          <Text className='text-[10px] text-white font-extrabold uppercase tracking-wider'>Obrigatório</Text>
        </View>
      )
      }

      {dateTime && (
        <View className='absolute z-10 bg-white/90 backdrop-blur-md rounded-2xl px-2.5 py-1 top-3 left-3 border border-slate-500/20 flex-row gap-1'>
          <MaterialCommunityIcons name='calendar-blank' color={"#334155"} size={12} />
          <Text className='text-xs text-slate-700 font-extrabold'>{DataFormatada(dateTime)}</Text>
        </View>
      )}

      <View className='overflow-hidden rounded-xl h-44 w-full'>
        <Image source={{ uri: img }} style={{ height: "100%", width: "100%" }} resizeMode='cover' />
        <LinearGradient
          colors={['rgb(0, 0, 0, 0.35)', 'transparent']}
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        />
      </View>

      <View className='p-4 gap-3'>

        <View className='gap-1'>
          <View className="flex-row items-center gap-1.5 mb-1">
            <Text className="text-[10px] font-black uppercase tracking-wider" style={{ color: uiStyle.cor }}>
              {uiStyle.label}
            </Text>
          </View>

          <View>
            <Text className='text-base text-slate-800 font-black leading-tight'>{titulo}</Text>
            <Text className='text-xs text-slate-400 leading-normal'>{descricao}</Text>
          </View>
        </View>


        {((tipo === 'minhasReservas' || tipo === 'assembleia') || status === 'Aguardando') && (
          <>
            <View className='h-[1px] bg-slate-100 w-full' />

            <View className='justify-end flex-row gap-2 pt-0.5'>

              <TouchableOpacity onPress={() => router.push(`/agenda/${id}`)} className=' border border-slate-200 py-2 px-4 rounded-xl justify-center'>
                <Text className='text-slate-600 text-xs font-extrabold'>Ver detalhes</Text>
              </TouchableOpacity>

              {status === 'Aguardando' || tipo === 'assembleia' ? (
                <TouchableOpacity className='bg-green-500 px-4 py-2 rounded-xl active:bg-green-700 shadow-sm'>
                  <Text className='text-sm text-white font-bold'>Confirmar Presença</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </>
        )}

        {/* <View className='flex-row gap-2'>

          <View className='border rounded-full py-2 px-4 border-slate-400/80'>
            <Text className='text-sm text-slate-500 font-bold'>{new Date(dateTime).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', weekday: 'short'}) }</Text>
          </View>

          <View className='border rounded-full py-2 px-4 border-slate-400/80'>
            <Text className='text-sm text-slate-500 font-bold'>{status}</Text>
          </View>


        </View> */}

      </View>
    </View>
  )
}