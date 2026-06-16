import { View, Text, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'

import { useAuth } from '@/hooks/useAuth'
import { LinearGradient } from 'expo-linear-gradient';
import MinhaAgenda from '@/sections/minhaAgenda';
import UtilidadePublica from '@/sections/UtilidadesPublicas';
import { useRouter } from 'expo-router'; // Alterado para o hook useRouter
import MeusAvisos from '@/sections/meusAvisos';

export default function Index() {
    const safe = useSafeAreaInsets();
    const router = useRouter(); // Inicializando o router via hook
    const { width } = Dimensions.get("window");
    const tamanhoAcessoRapido = (width - 48) / 3;

    const { signOut } = useAuth();

    return (
        <ScrollView className='flex-1 bg-slate-100' showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#22c55e" style="light" />

            {/* Cabeçalho */}
            <View className='bg-green-500 rounded-b-2xl pb-4' style={{ paddingTop: safe.top, elevation: 4 }}>
                <View className='flex-row w-full justify-between px-4 py-4 items-center'>
                    <View className='bg-white p-2 rounded-full items-center justify-center'>
                        <Image source={require('../../assets/img-logo-smartcondominio.png')} style={{ width: 20, height: 20 }} />
                    </View>
                    <Text className='text-white text-xl font-bold flex-1 ml-3'>Condomínio Inteligente</Text>
                    <TouchableOpacity>
                        <MaterialIcons name='person' color={"#22c55e"} size={22} style={{ backgroundColor: "#FFF", borderRadius: 999, padding: 6 }} />
                    </TouchableOpacity>
                </View>

                {/* Alerta de Encomendas */}
                <View className='px-4 py-2 gap-1'>
                    <Text className='text-white text-xl font-extrabold'>Olá, Raphael!</Text>
                    <View className='flex-row items-center gap-2 mt-1'>
                        <MaterialCommunityIcons name='package-variant-closed' color={"#bbf7d0"} size={18} />
                        <Text className='text-green-100 font-medium text-sm'>Você tem 2 pacotes na portaria</Text>
                    </View>
                </View>
            </View>

            {/* Grid de Acesso Rápido */}
            <View className='p-4 items-center gap-2'>
                {/* Linha 1 */}
                <View className='flex-row gap-2'>
                    <LinearGradient 
                        colors={["#22c55e", "#3D9DC7"]} 
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 1, y: 0 }} 
                        style={{ borderRadius: 12, height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 3 }}
                    >
                        {/* Corrigido: Rota limpa sem o (telas) */}
                        <TouchableOpacity 
                            onPress={() => router.push('/reservarEspaco')} 
                            className='items-center justify-center gap-2 flex-1'
                        >
                            <MaterialCommunityIcons name='bookmark-box-multiple-outline' size={36} color={"#FFF"} />
                            <Text className='text-white text-[11px] font-bold text-center px-1'>Reservar Espaço</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity className='bg-white rounded-xl items-center justify-center gap-2 border border-slate-200/60' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 2 }}>
                        <MaterialIcons name='people' size={36} color={"#64748b"} decay={true}/>
                        <Text className='text-[11px] text-slate-600 font-bold text-center px-1'>Acesso Visitantes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-white rounded-xl items-center justify-center gap-2 border border-slate-200/60' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 2 }}>
                        <MaterialIcons name='warning-amber' size={36} color={"#64748b"} />
                        <Text className='text-[11px] text-slate-600 font-bold text-center px-1'>Mural Aviso</Text>
                    </TouchableOpacity>
                </View>

                {/* Linha 2 */}
                <View className='flex-row gap-2'>
                    <TouchableOpacity className='bg-white rounded-xl items-center justify-center gap-2 border border-slate-200/60' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 2 }}>
                        <MaterialCommunityIcons name='cash' size={36} color={"#64748b"} />
                        <Text className='text-[11px] text-slate-600 font-bold text-center px-1'>Finanças</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-white rounded-xl items-center justify-center gap-2 border border-slate-200/60' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 2 }}>
                        <MaterialCommunityIcons name='alert-octagon-outline' size={36} color={"#64748b"} />
                        <Text className='text-[11px] text-slate-600 font-bold text-center px-1'>Ocorrências</Text>
                    </TouchableOpacity>

                    {/* Corrigido: Redirecionamento limpo para a Tab Mais */}
                    <TouchableOpacity 
                        onPress={() => router.push("/mais")} 
                        className='bg-white rounded-xl items-center justify-center gap-2 border border-slate-200/60' 
                        style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 2 }}
                    >
                        <MaterialCommunityIcons name='dots-horizontal' size={36} color={"#64748b"} />
                        <Text className='text-[11px] text-slate-600 font-bold text-center px-1'>Outros</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Seções de Conteúdo */}
            <MeusAvisos />
            <MinhaAgenda />
            <UtilidadePublica />

            {/* Botão Sair Otimizado */}
            <View className="px-4 mb-6 mt-2">
                <TouchableOpacity 
                    onPress={signOut} 
                    className='bg-red-50 border border-red-200 p-4 rounded-xl items-center justify-center active:bg-red-100'
                >
                    <Text className='text-red-600 font-bold text-base'>Sair do Aplicativo</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}