import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { compromissos } from '@/mocks/condominioDataMocks';

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

      <View className='bg-green-500 pb-6 rounded-b-2xl  ' style={{ paddingTop: insets.top, elevation: 4 }}>
        <View className='px-5 pt-4 flex-row gap-4 items-center'>
          <MaterialCommunityIcons name='calendar' size={28} color={"#FFF"} />
          <View className=''>
            <Text className='text-white text-2xl font-extrabold'>Minha Agenda</Text>
            <Text className='text-white text-xs mt-0.5'>Compromissos e comunicados de sua unidade</Text>
          </View>
        </View>
      </View>

      {/* Filtros Horizontais */}
      <View className='py-4'>
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

      <View>
        <FlatList
          data={dadosFiltrados}
          renderItem={({ item }) => <RenderMinhaAgenda status={item.status} img={item.imagem} titulo={item.titulo} descricao={item.descricao} dateTime={item.dateTime} />}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 32
          }}
        />
      </View>



    </View>
  );
}

type RenderMinhaAgendaProps = {
  img: string;
  titulo: string;
  descricao: string;
  dateTime: string; // ISO String vinda da API / Mock
  tipo: 'eventos' | 'minhasReservas' | 'visitante' | 'assembleia';
  status: string
};

const configPorTipo = {
  eventos: { label: 'Comunicado', icone: 'wrench-outline', cor: '#ef4444', bg: '#fef2f2' },
  visitante: { label: 'Visitante', icone: 'truck-delivery-outline', cor: '#3b82f6', bg: '#eff6ff' },
  minhasReservas: { label: 'Minha Reserva', icone: 'glass-cocktail', cor: '#22c55e', bg: '#f0fdf4' },
  assembleia: { label: 'Assembleia', icone: 'gavel', cor: '#a855f7', bg: '#f3e8ff' }
};

// const

// const status = compromissos.status

const RenderMinhaAgenda = ({ img, titulo, descricao, dateTime, tipo, status }: RenderMinhaAgendaProps) => {

  const uiStyle = configPorTipo[tipo] || configPorTipo.eventos;

  return (
    <TouchableOpacity className='p-1 bg-white rounded-2xl mb-4' style={{ elevation: 2 }}>

      <View className='overflow-hidden rounded-xl h-44 w-full'>
        <Image source={{ uri: img }} style={{ height: "100%", width: "100%" }} resizeMode='cover' />
      </View>

      <View className='p-4 gap-4'>
        <View>
          <Text className='text-base text-slate-800 font-extrabold'>{titulo}</Text>
          <Text className='text-xs text-slate-400'>{descricao}</Text>
        </View>

        <View className='flex-row gap-2'>

          <View className='border rounded-full py-2 px-4 border-slate-400/80'>
            <Text className='text-sm text-slate-500 font-bold'>{new Date(dateTime).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', weekday: 'short'}) }</Text>
          </View>

          <View className='border rounded-full py-2 px-4 border-slate-400/80'>
            <Text className='text-sm text-slate-500 font-bold'>{status}</Text>
          </View>


        </View>
      </View>
    </TouchableOpacity>
  )
}