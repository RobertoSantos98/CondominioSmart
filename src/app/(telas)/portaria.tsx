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

    return (
        <TouchableOpacity className='bg-white mb-4 rounded-2xl p-4 gap-2 shadow-sm border border-slate-200/40' activeOpacity={0.8} onPress={() => setAberto(!aberto)} style={{elevation: 2}}>
            <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center flex-1 gap-3.5'>

                    <View className={`h-11 w-11 items-center justify-center rounded-xl ${status === 'Portaria' ? 'bg-amber-50' : 'bg-green-50'}`}>
                        <MaterialCommunityIcons 
                            name='package-variant-closed' 
                            size={20} 
                            color={status === 'Portaria' ? '#d97706' : '#16a34a'} 
                        />
                    </View>
                <View className="flex-1 gap-0.5">
                    <Text className='text-slate-800 font-black text-sm' numberOfLines={1}>{description}</Text>
                    {/* 💡 UX: Mostra a data de chegada mesmo com o card fechado */}
                    <Text className='text-slate-400 text-[11px] font-medium'>Chegou {horarioRecebido}</Text>
                </View>
            </View>

 
      <View className='pl-2'>
        <MaterialCommunityIcons 
          name={aberto ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="#94a3b8" 
        />
      </View>
    </View>

        {aberto && (
            <View className='mt-4 pt-4 border-t border-slate-100 gap-3'>

                {status === 'Portaria' && (
                    <View className='border border-amber-200/40 bg-amber-50/60 p-3 rounded-xl flex-row items-center justify-between'>
                        <View>
                            <Text className='text-[10px]  text-amber-700 font-black uppercase tracking-wider'>PIN de Retirada</Text>
                            <Text className='text-slate-500 text-xs mt-0.5'>Mostre ao porteiro para retirar</Text>
                        </View>
                        <Text className='text-2xl text-amber-600 font-mono font-black tracking-wider'>{PIN || 'N/A'}</Text>
                    </View>
                )}

                <View className='flex-row justify-between items-center'>
                    <Text className='text-slate-400 text-xs font-semibold'>Código de Rastreio: </Text>
                    <Text className='px-1 py-0.5 rounded bg-slate-100 text-slate-700 font-black text-xs'>{codigo}</Text>
                </View>

                <View className='flex-row justify-between items-center'>
                    <Text className='text-xs text-slate-400 font-semibold'>Recebido Por: </Text>
                    <Text className='text-xs text-slate-700 font-extrabold'>{receivedBy}</Text>
                </View>

                {horarioRetirada && (
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-xs text-slate-400 font-semibold'>Retirado: </Text>
                        <Text className='text-xs text-green-500 font-extrabold'>{horarioRetirada}</Text>
                    </View>
                )}
            </View>
        )}
        </TouchableOpacity>
    )

}