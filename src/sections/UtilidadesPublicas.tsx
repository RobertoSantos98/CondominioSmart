import TitleLabel from '@/components/titleLabel';
import { FlatList, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
// Importando o mock que centraliza essas informações
import { mockAvisos } from '@/mocks/condominioDataMocks'; 

const { width } = Dimensions.get("window");

export default function UtilidadePublica() {
    
    // Filtramos o nosso mock global para exibir apenas o que é interesse comunitário
    const dadosComunitarios = mockAvisos.filter(
        item => item.category === 'Comunidade' || item.category === 'Classificados'
    );

    return (
        <View className="my-2">
            <TitleLabel title='Utilidade Pública' label='Todos' onPress={() => null} />

            <FlatList
                data={dadosComunitarios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RenderItems 
                        title={item.title} 
                        message={item.description} 
                        // Imagens fallback bem bonitas do Unsplash baseadas na categoria do mock
                        img={item.category === 'Classificados' 
                            ? "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400" // Eletrodoméstico/Airfryer
                            : "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400" // Chaves
                        } 
                        category={item.category}
                        badgeColor={item.badgeColor}
                    />
                )}
                horizontal
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

type RenderItemProps = {
    title: string;
    message: string;
    img: string;
    category: string;
    badgeColor: string;
}

const RenderItems = ({ title, message, img, category, badgeColor }: RenderItemProps) => {
    return (
        <TouchableOpacity 
            className='bg-white mr-4 rounded-2xl flex-row overflow-hidden border border-slate-100 shadow-sm' 
            style={{ elevation: 3, width: (width / 3) * 2.2 }}
            activeOpacity={0.7}
        >

            <View className="w-24 h-24 m-1.5 rounded-xl overflow-hidden bg-slate-50">
                <Image 
                    source={{ uri: img }} 
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>

        
            <View className='flex-1 justify-center py-2 pr-3 pl-1 gap-0.5'>
           
                <View className={`self-start px-2 py-0.5 rounded-md mb-1 ${badgeColor}`}>
                    <Text className="text-[9px] font-bold tracking-wide uppercase">{category}</Text>
                </View>

                <Text className='font-bold text-sm text-slate-800' numberOfLines={1}>
                    {title}
                </Text>
                
                <Text className='text-neutral-500 text-xs leading-4' numberOfLines={2}>
                    {message}
                </Text>
            </View>
        </TouchableOpacity>
    );
};