import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function VerPerfil() {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView className='flex-1 bg-slate-100' showsVerticalScrollIndicator={false}>

        
        
            <View className='bg-green-500 pb-10 rounded-b-3xl' style={{ paddingTop: insets.top, elevation: 4 }}>
                <View className='flex-row p-4 items-center'>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="bg-white/20 p-2 rounded-full active:bg-white/30"
                    >
                        <MaterialIcons name='arrow-back' color={"#FFF"} size={22} />
                    </TouchableOpacity>
                    <Text className='text-white text-xl font-bold ml-4'>Meu Perfil</Text>
                </View>
            </View>

         
            <View className='bg-white p-4 rounded-full -mt-12 self-center border border-slate-100 shadow-sm' style={{ elevation: 3 }}>
                <MaterialIcons name='person' size={64} color="#64748b" />
            </View>

           
            <View className='self-center items-center mt-2 mb-4'>
                <Text className='font-extrabold text-xl text-slate-800'>Rafael dos Santos</Text>
                <Text className='text-slate-400 text-sm font-medium'>rafael@teste.com</Text>
            </View>

       
            <Text className='px-6 pt-2 pb-1 text-slate-400 font-bold text-[11px] uppercase tracking-wider'>Dados de Contato</Text>
            <View className='p-4 mx-4 mb-4 rounded-2xl border border-slate-200/60 bg-white gap-4 shadow-sm' style={{ elevation: 2 }}>

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='home-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Bloco / Apto</Text>
                        <Text className='font-bold text-slate-800 text-sm mt-0.5'>Bloco 2B - Apto 11</Text>
                    </View>
                </View>
                <View className='bg-slate-100 h-[1px] px-2 ' />

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='card-account-details-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>CPF</Text>
                        <Text className='font-bold text-slate-800 text-sm mt-0.5'>000.000.000-00</Text>
                    </View>
                </View>
                <View className='bg-slate-100 h-[1px] px-2 ' />

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='phone-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Telefone</Text>
                        <Text className='font-bold text-slate-800 text-sm mt-0.5'>(11) 91234-5678</Text>
                    </View>
                </View>
            </View>

           
            <Text className='px-6 pt-2 pb-1 text-slate-400 font-bold text-[11px] uppercase tracking-wider'>Vínculo Condominial</Text>
            <View className='p-4 mx-4 mb-6 border border-slate-200/60 bg-white gap-4 rounded-2xl shadow-sm' style={{ elevation: 2 }}>

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='account-tie-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Tipo de Perfil</Text>
                        <Text className='text-slate-800 font-bold text-sm mt-0.5'>Proprietário</Text>
                    </View>
                </View>

                <View className='bg-slate-100 h-[1px] px-2 ' />

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='car-info' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Vaga de Garagem</Text>
                        <Text className='text-slate-800 font-bold text-sm mt-0.5'>Vaga 42 (Subsolo 1)</Text>
                    </View>
                </View>

                <View className='bg-slate-100 h-[1px] px-2 ' />

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='calendar-clock-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Data de Adesão</Text>
                        <Text className='text-slate-800 font-bold text-sm mt-0.5'>Desde Janeiro de 2025</Text>
                    </View>
                </View>

                <View className='bg-slate-100 h-[1px] px-2 ' />

                <View className='flex-row gap-3 items-start'>
                    <MaterialCommunityIcons name='shield-check-outline' size={20} color={"#94a3b8"} style={{ marginTop: 2 }} />
                    <View className="flex-1">
                        <Text className='text-slate-400 text-[10px] font-bold uppercase tracking-wide'>Status do Acesso</Text>
                        <View className="flex-row items-center gap-1 mt-0.5">
                            <View className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <Text className='text-slate-800 font-bold text-sm'>Biometria Cadastrada</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View className='px-4 pb-10 gap-3'>
             
                <TouchableOpacity className='p-4 rounded-xl overflow-hidden items-center justify-center' activeOpacity={0.8}>
                    <LinearGradient
                        colors={["#22c55e", "#3D9DC7"]}
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                    <Text className='text-white font-extrabold text-sm uppercase tracking-wider'>Solicitar Edição de Dados</Text>
                </TouchableOpacity>

                
                
                <TouchableOpacity
                    className='p-4 rounded-xl items-center justify-center bg-white border border-slate-200 active:bg-slate-50 shadow-sm'
                    style={{ elevation: 1 }}
                    activeOpacity={0.7}
                >
                    <Text className='text-slate-700 font-extrabold text-sm uppercase tracking-wider'>Alterar Minha Senha</Text>
                </TouchableOpacity>

                
                
                <TouchableOpacity
                    className='p-4 rounded-xl items-center justify-center bg-red-50 border border-red-200 active:bg-red-100 mt-2'
                    activeOpacity={0.7}
                >
                    <Text className='text-red-600 font-extrabold text-sm uppercase tracking-wider'>Sair da Conta</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}