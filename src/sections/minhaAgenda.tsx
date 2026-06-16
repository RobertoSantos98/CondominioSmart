import TitleLabel from '@/components/titleLabel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
// Importando seus dados simulados ricos
import { mockAgendaMorador } from '@/mocks/condominioDataMocks'; 
import { useRouter } from 'expo-router';

const { width } = Dimensions.get("window");

export default function MinhaAgenda() {
    const router = useRouter();

    const handleVerTodosAgenda = () => {
        // Redireciona o usuário direto para a Tab Agenda se ele clicar em "ver todos"
        router.push('/agenda'); 
    };

    return (
        <View className="my-2">
            <TitleLabel title="Minha Agenda" label='ver todos' onPress={handleVerTodosAgenda} />

            <View>
                <FlatList
                    data={mockAgendaMorador}
                    renderItem={({ item }) => {
                        // Tratando a data ISO vinda do mock dinamicamente
                        const dataObjeto = new Date(item.dateTime);
                        const dataFormatada = dataObjeto.toLocaleDateString('pt-BR', { 
                            weekday: 'long', 
                            day: '2-digit', 
                            month: '2-digit' 
                        });
                        const horaFormatada = dataObjeto.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        });

                        // Imagem fallback caso o tipo do evento mude (Ex: visitante não tem foto de salão)
                        const imagemCard = item.type === 'reserva' 
                            ? "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500"
                            : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

                        return (
                            <RenderAgendas 
                                title={item.title} 
                                data={`${dataFormatada} às ${horaFormatada}`} 
                                img={imagemCard}
                                type={item.type}
                                status={item.status}
                                statusColor={item.statusColor}
                            />
                        );
                    }}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    // Garante o alinhamento perfeito dos cards e não corta a sombra (elevation)
                    contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }} 
                />
            </View>
        </View>
    );
}

type RenderAgendasProps = {
    title: string;
    data: string;
    img: string;
    type: string;
    status: string;
    statusColor: string;
}

function RenderAgendas({ title, data, img, type, status, statusColor }: RenderAgendasProps) {
    return (
        <View 
            className='bg-white rounded-2xl mr-4 border border-slate-100 shadow-sm overflow-hidden' 
            style={{ width: width - 48, elevation: 3 }} 
        >

            <View className='m-1 rounded-xl overflow-hidden bg-slate-100 relative'>
                <Image source={{ uri: img }} style={{ width: "100%", height: 130 }} />
                

                <View className={`absolute right-2 top-2 px-2.5 py-1 rounded-full ${statusColor}`}>
                    <Text className="text-[10px] font-extrabold uppercase tracking-wider">{status}</Text>
                </View>
            </View>


            <View className='px-4 pb-4 pt-2 gap-1.5'>
                <View className='flex-row items-center gap-2'>
                    <MaterialCommunityIcons 
                        name={type === 'reserva' ? 'calendar-check' : 'account-clock'} 
                        size={20} 
                        color={"#22c55e"} 
                    />
                    <Text className='font-bold text-base text-slate-800 flex-1' numberOfLines={1}>
                        {title}
                    </Text>
                </View>

                <View className="flex-row items-center gap-1">
                    <Text className='text-slate-500 text-xs font-medium capitalize'>📅 {data}</Text>
                </View>

                <View className='h-[1px] bg-slate-100 my-1' />

  
                <View className='flex-row justify-between items-center mt-1'>
                    {type === 'reserva' ? (
                        <TouchableOpacity className='bg-green-500 py-2 px-5 rounded-xl active:bg-green-600'>
                            <Text className='text-white font-bold text-xs'>Convidar Amigos</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity className='bg-sky-500 py-2 px-5 rounded-xl active:bg-sky-600'>
                            <Text className='text-white font-bold text-xs'>Ver QR Code</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity className='border border-red-200 bg-red-50/50 rounded-xl px-4 py-2 active:bg-red-100'>
                        <Text className='text-red-500 font-semibold text-xs'>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}