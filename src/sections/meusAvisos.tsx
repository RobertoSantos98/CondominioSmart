import TitleLabel from '@/components/titleLabel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { mockAvisos } from '@/mocks/condominioDataMocks';

const { width } = Dimensions.get("window");

export default function MeusAvisos() {
    return (
        <View className="my-2">
            <TitleLabel title="Avisos" label="ver todos" onPress={() => null} />

            <View>
                <FlatList
                    data={mockAvisos}
                    // Passamos o "item" completo desestruturado para o componente filho
                    renderItem={({ item }) => (
                        <RenderAvisos 
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            urgencyLevel={item.urgencyLevel}
                            isRead={item.isRead}
                            // Convertendo a String ISO em data brasileira legível
                            createdAt={new Date(item.createdAt).toLocaleDateString('pt-BR')} 
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
                />
            </View>
        </View>
    );
}

type RenderAvisosProp = {
    title: string;
    description: string;
    category: string;
    urgencyLevel: string;
    createdAt: string;
    isRead: boolean;
}

const RenderAvisos = ({ title, description, category, urgencyLevel, createdAt, isRead }: RenderAvisosProp) => {
    
    // Função para escolher o ícone baseado na categoria do mock
    const getIconeCategoria = (cat: string): React.ComponentProps<typeof MaterialCommunityIcons>['name'] => {
        switch (cat.toLowerCase()) {
            case 'manutenção': return 'tools';
            case 'assembleia': return 'gavel';
            case 'eventos': return 'calendar-star';
            case 'classificados': return 'storefront';
            default: return 'bell-outline';
        }
    };

    // Define a cor lateral baseado na urgência (Alta = Vermelho, Média = Amarelo, Baixa = Azul)
    const getCorUrgencia = () => {
        if (urgencyLevel === 'alta') return { bg: 'bg-red-50', text: '#ef4444' };
        if (urgencyLevel === 'media') return { bg: 'bg-amber-50', text: '#f59e0b' };
        return { bg: 'bg-slate-50', text: '#64748b' };
    };

    const corUrgencia = getCorUrgencia();

    return (
        <View 
            className='bg-white rounded-2xl mr-3 flex-row overflow-hidden border border-slate-100 shadow-sm' 
            style={{ width: (width / 3) * 2.2, elevation: 3 }}
        >
            {/* Indicador de Não Lido (Bolinha azul brilhante) - Só aparece se isRead for FALSE */}
            {!isRead && (
                <View className='h-2.5 w-2.5 absolute right-3 top-3 rounded-full overflow-hidden z-10'>
                    <LinearGradient
                        colors={["#3b82f6", "#1d4ed8"]}
                        style={{ flex: 1 }}
                    />
                </View>
            )}

            {/* Faixa lateral com o ícone da Categoria */}
            <View className={`px-4 items-center justify-center ${corUrgencia.bg}`}>
                <MaterialCommunityIcons 
                    name={getIconeCategoria(category)} 
                    color={corUrgencia.text} 
                    size={26} 
                />
            </View>

            {/* Conteúdo do Card */}
            <View className='flex-1 justify-center py-3 px-4 gap-1'>
                {/* numberOfLines={1} impede que o título quebre o layout se for muito longo */}
                <Text className='font-bold text-base text-slate-800' numberOfLines={1}>
                    {title}
                </Text>
                
                <Text className='text-slate-500 text-xs' numberOfLines={1}>
                    {description}
                </Text>

                <View className='h-[1px] bg-slate-100 my-1' />
                
                <Text className='text-neutral-400 text-[10px] font-medium'>
                    📅 {createdAt}
                </Text>
            </View>
        </View>
    );
};