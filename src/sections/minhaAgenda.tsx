import TitleLabel from '@/components/titleLabel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get("window")

export default function MinhaAgenda() {

    const Agenda = [
        { id: 1, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00", img: "https://www.casadevalentina.com.br/wp-content/uploads/2019/11/Sal%C3%A3oDeFestas_CasaDeValentina-6.jpg" },
        { id: 2, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00",img: "https://menin.com.br/wp-content/uploads/2024/09/Festas-Drummond-1.jpeg" },
        { id: 3, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00",img: "https://www.casadevalentina.com.br/wp-content/uploads/2019/11/Sal%C3%A3oDeFestas_CasaDeValentina-6.jpg" },
    ]

    const handleVerTodosAgenda = () => {
        return
    }


    return (
        <View className=''>
            <TitleLabel title="Minha Agenda" label='ver todos' onPress={handleVerTodosAgenda} />

            <View>
                <FlatList
                    data={Agenda}
                    renderItem={({ item }) => <RenderAgendas title={item.title} data={item.data} img={item.img}/>}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </View>

        </View>
    );
}

type RenderAgendasProps = {
    title: string,
    data: string,
    img: string
}

function RenderAgendas({ title, data, img }: RenderAgendasProps) {
    return (
        <View className='bg-white w-full rounded-2xl mx-4 mb-4' style={{ width: width - 32, elevation: 4 }}>

            <View className='m-1 rounded-xl overflow-hidden bg-black'>
                <Image source={{uri: img}} style={{width: "100%", height: 150}} />
            </View>

            <View className='px-8 py-4 gap-2'>
                <View className='flex-row gap-2'>
                    <MaterialCommunityIcons name='calendar' size={20} color={"#737373"} />
                    <Text className='font-bold'>{title}</Text>
                </View>
                {/* <View className='h-[1px] bg-gray-100' /> */}

                <Text className='text-gray-500'>Data: {data}</Text>
                <Text className='text-gray-500'>Horário: 19:00 às 22:00</Text>

                <View className='py-2 flex-row justify-between'>
                    <TouchableOpacity className='bg-green-500 py-2 px-4 rounded-full'>
                        <Text className='text-white font-bold'>Convidar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='border border-red-500 rounded-full px-4 py-2 self-end'>
                        <Text className='text-red-500'>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}