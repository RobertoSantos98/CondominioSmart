import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mockEspacos } from '@/mocks/condominioDataMocks';

const { width } = Dimensions.get("window");

export default function ReservarEspaco() {
    const safe = useSafeAreaInsets();
    const router = useRouter();

    // Estados para controlar o espaço selecionado, data e termos
    const [espacoSelecionado, setEspacoSelecionado] = useState(mockEspacos[0]);
    const [diaSelecionado, setDiaSelecionado] = useState('18');
    const [turnoSelecionado, setTurnoSelecionado] = useState('noite');
    const [termoAceito, setTermoAceito] = useState(false);

    // Dias simulados para o calendário horizontal
    const diasSimulados = [
        { id: '16', diaSemana: 'Hoje', numero: '16' },
        { id: '17', diaSemana: 'Qua', numero: '17' },
        { id: '18', diaSemana: 'Qui', numero: '18' },
        { id: '19', diaSemana: 'Sex', numero: '19' },
        { id: '20', diaSemana: 'Sáb', numero: '20' },
        { id: '21', diaSemana: 'Dom', numero: '21' },
    ];

    return (
        <ScrollView className='flex-1 bg-slate-100' showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#22c55e" style="light" />

            {/* Cabeçalho Identêntico ao da Home */}
            <View className='bg-green-500 rounded-b-2xl pb-6' style={{ paddingTop: safe.top, elevation: 4 }}>
                <View className='flex-row w-full justify-between px-4 py-4 items-center'>
                    <TouchableOpacity 
                        onPress={() => router.back()} 
                        className="bg-white/20 p-2 rounded-full active:bg-white/30"
                    >
                        <MaterialIcons name='arrow-back' color={"#FFF"} size={22} />
                    </TouchableOpacity>
                    
                    <Text className='text-white text-xl font-bold flex-1 ml-4'>Reservar Espaço</Text>
                </View>

                <View className='px-4 mt-1'>
                    <Text className='text-white text-sm font-medium opacity-90'>
                        Selecione o local desejado e escolha a melhor data para o seu evento.
                    </Text>
                </View>
            </View>

            {/* 1. Carrossel de Seleção de Espaços */}
            <View className="mt-4">
                <Text className="text-slate-800 font-extrabold text-lg px-4 mb-3">1. Escolha o Local</Text>
                <FlatList
                    data={mockEspacos}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    renderItem={({ item }) => {
                        const isSelected = espacoSelecionado.id === item.id;
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    if (item.status === 'disponivel') setEspacoSelecionado(item);
                                }}
                                disabled={item.status === 'manutencao'}
                                className={`bg-white mr-3 rounded-2xl overflow-hidden border border-slate-200/60 p-2 items-center ${
                                    isSelected ? 'border-green-500 bg-green-50/30' : ''
                                } ${item.status === 'manutencao' ? 'opacity-50' : ''}`}
                                style={{ width: width * 0.4, elevation: isSelected ? 4 : 1 }}
                            >
                                <Image source={{ uri: item.image }} className="w-full h-24 rounded-xl" resizeMode="cover" />
                                <Text className="font-bold text-slate-800 text-xs mt-2 text-center" numberOfLines={1}>
                                    {item.name}
                                </Text>
                                <Text className="text-[10px] font-semibold text-green-600 mt-0.5">
                                    {item.fee === 0 ? 'Gratuito' : `R$ ${item.fee.toFixed(2)}`}
                                </Text>
                                
                                {item.status === 'manutencao' && (
                                    <View className="absolute inset-0 bg-black/40 justify-center items-center rounded-2xl">
                                        <Text className="text-white font-bold text-xs uppercase tracking-wider">Manutenção</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

            {/* Container de detalhes e agendamento */}
            <View className="p-4 gap-5">
                
                {/* 2. Calendário Horizontal */}
                <View className="bg-white p-4 rounded-2xl border border-slate-200/60" style={{ elevation: 2 }}>
                    <Text className="text-slate-800 font-extrabold text-base mb-3">2. Selecione a Data</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                        {diasSimulados.map((dia) => {
                            const isSelected = diaSelecionado === dia.id;
                            return (
                                <TouchableOpacity
                                    key={dia.id}
                                    onPress={() => setDiaSelecionado(dia.id)}
                                    className={`p-3 rounded-xl mr-2.5 items-center justify-center w-14 border ${
                                        isSelected ? 'bg-green-500 border-green-500' : 'bg-slate-50 border-slate-100'
                                    }`}
                                    style={{ elevation: isSelected ? 3 : 0 }}
                                >
                                    <Text className={`text-[10px] font-bold ${isSelected ? 'text-green-100' : 'text-slate-400'} uppercase`}>
                                        {dia.diaSemana}
                                    </Text>
                                    <Text className={`text-base font-extrabold mt-0.5 ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                                        {dia.numero}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* 3. Seleção de Turno */}
                <View className="bg-white p-4 rounded-2xl border border-slate-200/60" style={{ elevation: 2 }}>
                    <Text className="text-slate-800 font-extrabold text-base mb-3">3. Escolha o Período</Text>
                    <View className="flex-row gap-3">
                        <TouchableOpacity 
                            onPress={() => setTurnoSelecionado('manha')}
                            className={`flex-1 p-3 rounded-xl border items-center justify-center ${turnoSelecionado === 'manha' ? 'bg-green-50 border-green-500' : 'border-slate-200'}`}
                        >
                            <MaterialCommunityIcons name="weather-sunny" size={22} color={turnoSelecionado === 'manha' ? "#22c55e" : "#64748b"} />
                            <Text className={`text-xs font-bold mt-1 ${turnoSelecionado === 'manha' ? 'text-green-600' : 'text-slate-600'}`}>Manhã</Text>
                            <Text className="text-[9px] text-slate-400 mt-0.5">08:00 às 14:00</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => setTurnoSelecionado('noite')}
                            className={`flex-1 p-3 rounded-xl border items-center justify-center ${turnoSelecionado === 'noite' ? 'bg-green-50 border-green-500' : 'border-slate-200'}`}
                        >
                            <MaterialCommunityIcons name="weather-night" size={22} color={turnoSelecionado === 'noite' ? "#22c55e" : "#64748b"} />
                            <Text className={`text-xs font-bold mt-1 ${turnoSelecionado === 'noite' ? 'text-green-600' : 'text-slate-600'}`}>Tarde/Noite</Text>
                            <Text className="text-[9px] text-slate-400 mt-0.5">16:00 às 23:00</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 4. Regras e Termos */}
                <View className="bg-white p-4 rounded-2xl border border-slate-200/60" style={{ elevation: 2 }}>
                    <Text className="text-slate-800 font-extrabold text-base mb-2">Termos e Regras de Uso</Text>
                    <View className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                        <Text className="text-slate-500 text-xs leading-4">
                            • Capacidade máxima permitida: {espacoSelecionado.capacity} pessoas.{"\n"}
                            • {espacoSelecionado.rules}{"\n"}
                            • Cancelamentos devem ser feitos com no mínimo 48h de antecedência.
                        </Text>
                    </View>

                    {/* Checkbox */}
                    <TouchableOpacity 
                        onPress={() => setTermoAceito(!termoAceito)}
                        className="flex-row items-center"
                        activeOpacity={0.8}
                    >
                        <View className={`w-5 h-5 rounded-md border mr-2.5 items-center justify-center ${termoAceito ? 'bg-green-500 border-green-500' : 'border-slate-300 bg-slate-50'}`}>
                            {termoAceito && <MaterialIcons name="check" size={14} color="#FFF" />}
                        </View>
                        <Text className="text-slate-600 text-xs font-medium flex-1">
                            Estou ciente e aceito as taxas e normas de uso do espaço.
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Botão de Ação */}
                <TouchableOpacity
                    disabled={!termoAceito}
                    className={`py-4 rounded-xl items-center justify-center shadow-md ${
                        termoAceito ? 'bg-green-500 active:bg-green-600' : 'bg-slate-300'
                    }`}
                    style={{ elevation: termoAceito ? 4 : 0 }}
                >
                    <Text className="text-white font-bold text-base">Confirmar Agendamento</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}