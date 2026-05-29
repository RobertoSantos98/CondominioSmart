import { View, Button, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'

import { useAuth } from '@/hooks/useAuth'
import { LinearGradient } from 'expo-linear-gradient';




export default function Index() {
    const safe = useSafeAreaInsets();
    const { width } = Dimensions.get("window");
    const tamanhoAcessoRapido = (width - 48) / 3;


    const { signOut } = useAuth();


    const avisos = [
        { id: 1, title: "Manutenção", local: "Elevador A", data: "Amanha 08h às 12h", importante: true},
        { id: 2, title: "Limpesa Piscina", local: "Piscina", data: "Amanha 08h às 12h", importante: false},
        { id: 3, title: "Limpesa Piscina", local: "Piscina", data: "Amanha 08h às 12h", importante: true }
    ]


    return (
        <View className='flex-1 bg-sky-50'>
            <StatusBar backgroundColor="#84cc16" style="light"/>

            <View className='bg-lime-500 rounded-b-xl' style={{ paddingTop: safe.top }}>
                <View className='flex-row w-full justify-around py-6'>
                    <MaterialCommunityIcons name='home' color={"#fff"} size={28} />
                    <Text className='text-white text-[20px] font-bold'>Condomínio Inteligente</Text>
                    <MaterialIcons name='person' color={"#fff"} size={24} />
                </View>
                <View className='px-4 py-5 gap-2'>
                    <Text className='text-white text-lg font-bold'>Olá, Raphael!</Text>
                    <View className='flex-row gap-2'>
                        <MaterialCommunityIcons name='package' color={"#15803d"} size={18} />
                        <Text className='text-green-700 '>Você tem 2 encomendas na portaria</Text>
                    </View>
                </View>
            </View>

            <View className='p-4 items-center gap-2'>
                <View className='flex-row gap-2'>
                    <LinearGradient colors={["#24DD30", "#3D9DC7"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 12, height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
                        <TouchableOpacity className='rounded-xl items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido }}>
                            <MaterialCommunityIcons name='bookmark-box-multiple-outline' size={60} color={"#FFF"} />
                            <Text className='text-white text-xs font-bold'>Reserva Espaço</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity className='bg-white  rounded-xl h-32 items-center justify-center gap-2' style={{ height: tamanhoAcessoRapido, width: tamanhoAcessoRapido, elevation: 4 }}>
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

            <View className='px-4 py-4'>
                <View className='flex-row justify-between items-center'>
                    <Text className='font-bold'>Avisos</Text>
                    <View className='flex-row items-center'>
                        <Text className='font-bold'>Ver Tudo</Text>
                        <MaterialIcons name='keyboard-double-arrow-right' size={20} color={"#84cc16"} />
                    </View>
                </View>
            </View>

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

            <Button title='Sair' onPress={signOut} />
        </View>
    )
}

type RenderAvisosProp = {
    title: string,
    local: string,
    data: string,
    importante: boolean
}

const RenderAvisos = ({ title, local, data, importante}: RenderAvisosProp) => {
    return (
        <View className='bg-white rounded-xl w-60 py-3 px-4 mr-2 my-3' style={{ elevation: 4, borderColor: "#FF0000",borderWidth:importante? 1: 0 }}>
            <View className='flex-row gap-2'>
                <MaterialCommunityIcons name={importante? 'tools' : 'toolbox'} color={importante? "#FF0000" : "#e5de00"} size={20}/>
                <Text className='font-bold'>{title}</Text>
            </View>
            <Text>{local}</Text>
            <Text className='text-neutral-500 text-xs'>{data}</Text>
        </View>
    )
}