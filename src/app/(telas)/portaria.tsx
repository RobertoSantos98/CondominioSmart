import { mockEncomendas } from '@/mocks/condominioDataMocks';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PortariaEncomendas() {

    const [estadoPortaria, setEstadoPortaria] = useState("pendentes");

    const insets = useSafeAreaInsets();


    const encomendasFiltradas = mockEncomendas.filter(item => {
        if (estadoPortaria === 'pendentes') return item.status === 'Portaria'

        return item.status === 'Retirado'
    })


    return (
        <View className='flex-1 bg-slate-100'>

            <View className='bg-green-500 rounded-b-2xl pb-6' style={{ paddingTop: insets.top, elevation: 2 }}>
                <View className='flex-row p-4 gap-4 items-center'>
                    <TouchableOpacity onPress={() => router.back()} className='bg-green-200/40 p-2 rounded-full active:bg-green-800'
                        style={{

                        }}
                    >
                        <MaterialCommunityIcons name='arrow-left' size={22} color={"#FFF"} />
                    </TouchableOpacity>

                    <View className='gap-1'>
                        <Text className='text-xl text-white font-extrabold'>Portaria e Encomendas</Text>
                        <Text className='text-sm text-white'>Gerencia suas encomendas ou avisos para a portaria</Text>
                    </View>
                </View>

            </View>

            <View className='pt-4 px-2 flex-row gap-2'>

                <TouchableOpacity className='items-center justify-center flex-1 py-2 rounded-t-xl'
                    style={{
                        borderColor: estadoPortaria === 'pendentes' ? "#22c55e" : "transparent",
                        borderBottomWidth: 2
                    }}
                    onPress={() => setEstadoPortaria('pendentes')}
                >
                    <Text className='text-slate-700'
                        style={{
                            color: estadoPortaria === 'pendentes' ? '#16a34a' : '#64748b',
                            fontWeight: estadoPortaria === 'pendentes' ? '800' : '600',
                        }}
                    >Pendentes</Text>
                </TouchableOpacity>

                <TouchableOpacity className='items-center justify-center flex-1 py-2'
                    style={{
                        borderColor: estadoPortaria === 'historico' ? "#22c55e" : "transparent",
                        borderBottomWidth: 2
                    }}
                    onPress={() => setEstadoPortaria('historico')}
                >
                    <Text className='text-slate-700'
                        style={{
                            color: estadoPortaria === 'historico' ? '#16a34a' : '#64748b',
                            fontWeight: estadoPortaria === 'historico' ? '800' : '600',
                        }}
                    >
                        Histórico</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={encomendasFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderItems pickedUpAt={item.pickedUpAt} description={item.description} codigo={item.code} receivedAt={item.receivedAt} receivedBy={item.receivedBy} status={item.status} PIN={item.PIN} />}
                contentContainerStyle={{
                    paddingHorizontal: 16, paddingTop: 8
                }}
            />





        </View>
    );
}

type encomendasType = {
    description: string,
    codigo: string,
    receivedAt: string,
    status: string, // Portaria, Retirado
    receivedBy: string,
    PIN: string,
    pickedUpAt?: string,
}

const RenderItems = ({ description, codigo, receivedAt, receivedBy, status, PIN, pickedUpAt }: encomendasType) => {

    const [aberto, setAberto] = useState(false);

    const horarioRecebido = receivedAt
        ? new Date(receivedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) + ' às ' +
        new Date(receivedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        : '';

    const horarioRetirada = pickedUpAt
        ? new Date(pickedUpAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) + ' às ' +
        new Date(pickedUpAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        : null;

    if (aberto) return (
        <TouchableOpacity className='bg-white mb-4 rounded-2xl p-4 gap-2 transform' activeOpacity={0.6} onPress={() => setAberto(false)} >
            <View className='flex-row justify-between'>
                <View className='justify-center'>
                    <Text className='text-slate-700 font-extrabold text-lg'>{description}</Text>
                    <Text className='text-slate-400 text-xs'>{codigo}</Text>
                </View>
                <View className='items-end bg-green-50 p-2 rounded-xl'>
                    <Text className='text-xs text-slate-400'>PIN para Retirada</Text>
                    <Text className='text-2xl font-extrabold text-green-600'>{PIN}</Text>
                </View>
            </View>

            <View className='h-[1px] bg-slate-100 w-full' />

            <View className='flex-row justify-between'>
                <Text className='text-slate-400 text-base'>Recebido: </Text>
                <Text className='font-extrabold text-base'>{horarioRecebido}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-slate-400 text-base'>Recebido por: </Text>
                <Text className='font-extrabold text-base'>{receivedBy}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-slate-400 text-base'>Status: </Text>
                <Text className='font-extrabold text-base'>{status}</Text>
            </View>

            {horarioRetirada && (
                <View className='flex-row justify-between'>
                    <Text className='text-slate-400 text-base'>Retirado às: </Text>
                    <Text className='font-extrabold text-base'>{horarioRetirada}</Text>
                </View>
            )}

        </TouchableOpacity>
    )

    return (
  <TouchableOpacity 
    className='bg-white mb-3 rounded-2xl p-4 border border-slate-200/50 shadow-sm' 
    style={{ elevation: 1 }} 
    activeOpacity={0.7} 
    onPress={() => setAberto(!aberto)} // Inverte o estado (abre e fecha)
  >
    {/* 🔝 CABEÇALHO DO CARD (Sempre Visível) */}
    <View className='flex-row items-center justify-between'>
      <View className='flex-row items-center flex-1 gap-3.5'>
        {/* Ícone de caixa com fundo suave */}
        <View className={`h-11 w-11 items-center justify-center rounded-xl ${status === 'Portaria' ? 'bg-amber-50' : 'bg-green-50'}`}>
          <MaterialCommunityIcons 
            name='package-variant-closed' 
            size={20} 
            color={status === 'Portaria' ? '#d97706' : '#16a34a'} 
          />
        </View>
        
        {/* Textos Principais */}
        <View className="flex-1 gap-0.5">
          <Text className='text-slate-800 font-black text-sm' numberOfLines={1}>{description}</Text>
          {/* 💡 UX: Mostra a data de chegada mesmo com o card fechado */}
          <Text className='text-slate-400 text-[11px] font-medium'>Chegou {horarioRecebido}</Text>
        </View>
      </View>

      {/* Indicador de Abertura (Chevron que gira ou muda de ícone) */}
      <View className='pl-2'>
        <MaterialCommunityIcons 
          name={aberto ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="#94a3b8" 
        />
      </View>
    </View>

    {/* 🔽 PAINEL DE DETALHES EXPANSÍVEL (Só renderiza se aberto === true) */}
    {aberto && (
      <View className="mt-4 pt-4 border-t border-slate-100 gap-3">
        
        {/* Se o pacote estiver na portaria, o PIN ganha o destaque máximo do card */}
        {status === 'Portaria' && (
          <View className='bg-amber-50/60 border border-amber-200/40 p-3 rounded-xl flex-row justify-between items-center mb-1'>
            <View>
              <Text className='text-[10px] text-amber-700 font-black uppercase tracking-wider'>PIN de Retirada</Text>
              <Text className='text-slate-500 text-xs mt-0.5'>Mostre ao porteiro para retirar</Text>
            </View>
            <Text className='text-2xl font-mono font-black text-amber-600 tracking-widest'>{PIN || 'N/A'}</Text>
          </View>
        )}

        {/* Grid de Informações Secundárias */}
        <View className='flex-row justify-between items-center'>
          <Text className='text-slate-400 text-xs font-semibold'>Código de Rastreio</Text>
          <Text className='font-mono font-bold text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded'>{codigo}</Text>
        </View>

        <View className='flex-row justify-between items-center'>
          <Text className='text-slate-400 text-xs font-semibold'>Recebido por</Text>
          <Text className='font-extrabold text-xs text-slate-700'>{receivedBy}</Text>
        </View>

        {horarioRetirada && (
          <View className='flex-row justify-between items-center'>
            <Text className='text-slate-400 text-xs font-semibold'>Retirado em</Text>
            <Text className='font-extrabold text-xs text-green-600'>{horarioRetirada}</Text>
          </View>
        )}
      </View>
    )}
  </TouchableOpacity>
);
}