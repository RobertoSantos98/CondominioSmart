import TitleLabel from '@/components/titleLabel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Text, View, Dimensions } from 'react-native';


const { width } = Dimensions.get("window")

export default function MeusAvisos() {

    const avisos = [
        { id: 1, title: "Manutenção", local: "Elevador A", data: "Amanhã 08h às 12h", importante: true },
        { id: 2, title: "Limpesa Piscina", local: "Piscina", data: "Amanhã 08h às 12h", importante: false },
        { id: 3, title: "Limpesa Piscina", local: "Piscina", data: "Amanhã 08h às 12h", importante: true }
    ]



    return (
        <View>
            <TitleLabel title="Avisos" label="ver todos" onPress={() => null} />

            <View>

                <FlatList
                    data={avisos}
                    renderItem={({ item }) => <RenderAvisos title={item.title} local={item.local} data={item.data} importante={item.importante} />}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 16 }}
                />
            </View>
        </View>
    );
}


type RenderAvisosProp = {
    title: string,
    local: string,
    data: string,
    importante: boolean
}

const RenderAvisos = ({ title, local, data, importante }: RenderAvisosProp) => {
    return (
        <View className='bg-white rounded-xl mr-4 mb-4 flex-row overflow-hidden' style={{width: width / 3 * 2 , elevation: 4, borderColor: "#FF0000", borderWidth: importante ? 0.2 : 0 }}>

            <View className='h-3 w-3 absolute right-2 top-2 rounded-full overflow-hidden'>
                <LinearGradient
                    colors={["#3b82f6", "#1d4ed8"]}
                    style={{ flex: 1 }}
                />
            </View>

            <View className='px-4 items-center justify-center' style={{ backgroundColor: importante ? "#fee2e2" : "#e2e8f0" }}>
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