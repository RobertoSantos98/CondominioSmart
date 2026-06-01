import TitleLabel from '@/components/titleLabel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const { width } = Dimensions.get("window")

export default function MinhaAgenda() {

    const Agenda = [
        {id: 1, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00"},
        {id: 2, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00"},
        {id: 3, title: "Salão de Festas", data: "Sábado, 26/10 às 19:00"},
    ]

    const handleVerTodosAgenda = () => {
        return
    }


    return (
        <View className=''>
            <TitleLabel title="Minha Agenda" label='Ver Todos' onPress={handleVerTodosAgenda} />

            <View>
                <FlatList
                    data={Agenda}
                    renderItem={({ item }) => <RenderAgendas title={item.title} data={item.data} /> }
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
    data: string
}

function RenderAgendas({title,  data}: RenderAgendasProps) {
    return(
        <View className='bg-white w-full px-8 py-4 rounded-xl gap-2 m-4' style={{width: width - 32, elevation: 4}}>
            <View className='flex-row gap-2'>
                <MaterialCommunityIcons name='calendar' size={20} color={"#737373"}/>
                <Text className='font-bold'>{title}</Text>
            </View>
            <Text>{data}</Text>
            <TouchableOpacity className='border border-red-500 rounded-full py-2 px-4 self-end'>
                <Text className='text-red-500'>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}