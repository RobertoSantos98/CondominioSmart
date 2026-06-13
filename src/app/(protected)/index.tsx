import { View, Button, Text, TouchableOpacity, Dimensions, FlatList, ScrollView, Image } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'

import { useAuth } from '@/hooks/useAuth'
import { LinearGradient } from 'expo-linear-gradient';
import TitleLabel from '@/components/titleLabel';
import MinhaAgenda from '@/sections/minhaAgenda';
import UtilidadePublica from '@/sections/UtilidadesPublicas';




export default function Index() {
    const safe = useSafeAreaInsets();
    const { width } = Dimensions.get("window");
    const tamanhoAcessoRapido = (width - 48) / 3;


    const { signOut } = useAuth();


    const avisos = [
        { id: 1, title: "Manutenção", local: "Elevador A", data: "Amanhã 08h às 12h", importante: true },
        { id: 2, title: "Limpesa Piscina", local: "Piscina", data: "Amanhã 08h às 12h", importante: false },
        { id: 3, title: "Limpesa Piscina", local: "Piscina", data: "Amanhã 08h às 12h", importante: true }
    ]


    const handleVerTodosAvisos = () => {
        return
    }


    return (
        <ScrollView className='flex-1 bg-slate-100'>
            <StatusBar backgroundColor="#84cc16" style="light" />

            <View className='bg-green-500 rounded-b-xl' style={{ paddingTop: safe.top, elevation: 4 }}>

                <View className='flex-row w-full justify-around py-4 items-center'>
                    <View className='bg-white p-3 rounded-full'>
                        <Image source={require('../../assets/img-logo-smartcondominio.png')} style={{ width: 18, height: 18 }} />
                    </View>
                    <Text className='text-white text-2xl font-bold'>Condomínio Inteligente</Text>
                    <TouchableOpacity>
                        <MaterialIcons name='person' color={"#22c55e"} size={24} style={{ backgroundColor: "#FFF", borderRadius: 999, padding: 6 }} />
                    </TouchableOpacity>
                </View>

                <View className='px-4 py-5 gap-2'>
                    <Text className='text-white text-xl font-extrabold'>Olá, Raphael!</Text>
                    <View className='flex-row gap-2'>
                        <MaterialCommunityIcons name='package' color={"#15803d"} size={18} />
                        <Text className='text-green-700'>Você tem 2 encomendas na portaria</Text>
                    </View>
                </View>

            </View>

            <View className='p-4 items-center gap-2'>
                <View className='flex-row gap-2'>
                    <LinearGradient colors={["#22c55e", "#3D9DC7"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 12, height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <TouchableOpacity className='rounded-xl items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido }}>
                            <MaterialCommunityIcons name='bookmark-box-multiple-outline' size={60} color={"#FFF"} />
                            <Text className='text-white text-xs font-bold'>Reserva Espaço</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity className='bg-white rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <MaterialIcons name='people' size={60} color={"#757575"} />
                        <Text className='text-xs text-neutral-500 font-bold'>Visitantes Acesso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white  rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <MaterialIcons name='warning-amber' size={60} color={"#757575"} />
                        <Text className='text-xs text-neutral-500 font-bold'>Mural Aviso</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row gap-2'>
                    <TouchableOpacity className='bg-white  rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <MaterialCommunityIcons name='cash' size={60} color={"#757575"} />
                        <Text className='text-xs text-neutral-500 font-bold'>Finanças</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white  rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <MaterialCommunityIcons name='block-helper' size={60} color={"#757575"} />
                        <Text className='text-xs text-neutral-500 font-bold'>Reportar Ocorrências</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white  rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <MaterialCommunityIcons name='menu-close' size={60} color={"#757575"} />
                        <Text className='text-xs text-neutral-500 font-bold'>Outros</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TitleLabel title="Avisos" label="Ver Todos" onPress={handleVerTodosAvisos} />

            <View>

                <FlatList
                    data={avisos}
                    renderItem={({ item }) => <RenderAvisos title={item.title} local={item.local} data={item.data} importante={item.importante} />}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 16 }}
                />
            </View>

            <MinhaAgenda />

            <UtilidadePublica/>

            <TouchableOpacity onPress={signOut} className='bg-blue-500 p-4 my-4'>
                <Text className='text-white'>Sair</Text>
            </TouchableOpacity>



        </ScrollView>



    )
}

type RenderAvisosProp = {
    title: string,
    local: string,
    data: string,
    importante: boolean
}

const RenderAvisos = ({ title, local, data, importante }: RenderAvisosProp) => {
    return (
        <View className='bg-white rounded-xl w-60 mr-2 my-3 flex-row overflow-hidden' style={{ elevation: 4, borderColor: "#FF0000", borderWidth: importante ? 0.2 : 0 }}>

            <View className='h-3 w-3 absolute right-2 top-2 rounded-full overflow-hidden'>
                <LinearGradient
                    colors={["#3b82f6", "#1d4ed8"]}
                    style={{flex:1}}
                />
            </View>
            
            <View className='bg-slate-200 px-4 items-center justify-center'>
                <MaterialCommunityIcons name={importante ? 'tools' : 'toolbox'} color={importante ? "#FF0000" : "#94a3b8"} size={28} />
            </View>

            <View className='gap-2 py-3 px-4'>
                <Text className='font-extrabold text-lg'>{title}</Text>
                <View className='h-[1px] bg-gray-100 rounded-xl' />
                <Text>{local}</Text>
                <Text className='text-neutral-500 text-xs'>{data}</Text>
            </View>
        </View>
    )
}