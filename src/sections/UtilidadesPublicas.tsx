import TitleLabel from '@/components/titleLabel';
import { FlatList, Image, Text, View } from 'react-native';

export default function UtilidadePublica() {

    const dados = [
        {id: 1, title: "Morador do apto 42", message: "Vendendo uma Airfryer", img: "https://t.ctcdn.com.br/O9butd0Uli1q5A_TeEyhXGGeAf0=/640x360/smart/i1112285.png"},
        {id: 2, title: "Portaria", message: "Chave de carro encontrada na garagem 2B", img:"https://www.diariodesantotirso.pt/wp-content/uploads/2023/09/2-23.jpg"},
    ]


 return (
   <View>
        <TitleLabel title='Utilidade Publica' label='Todos' onPress={() => null} />

        <FlatList
            data={dados}
            keyExtractor={(d) => d.id.toString()}
            renderItem={({ item }) => (<RenderItems title={item.title} message={item.message} img={item.img} />) }
            horizontal
            contentContainerStyle={{paddingHorizontal: 16, marginBottom: 16}}
            showsHorizontalScrollIndicator={false}
        />
   </View>
  );
}

type renderItemProps = {
    title: string,
    message: string,
    img: string
}

const RenderItems = ({title, message, img}: renderItemProps) => {
    return (
        <View className='bg-white gap-2 mr-2 rounded-2xl flex-row overflow-hidden' style={{elevation: 4}}>
            <Image source={{ uri: img}} style={{ width: 100, height: 100}}/>
            <View className='gap-2 p-4' style={{elevation: 4}}>
                <Text className='font-bold'>{title}</Text>
                <Text>{message}</Text>
            </View>
        </View>
    )
}