import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type TitleLabelProps = {
    title: string,
    label?: string,
    onPress?: () => void
}

export default function TitleLabel({title, label, onPress}: TitleLabelProps) {
    return (
        <View className='px-4 py-3 justify-center'>
            <View className='flex-row justify-between items-center'>
                <Text className='font-extrabold text-lg text-slate-800'>{title}</Text>

                {label && onPress && (
                <TouchableOpacity className='active:bg-slate-200 flex-row items-center justify-center gap-0.5 py-1 px-1 rounded-xl' onPress={onPress}>
                    <Text className='font-bold text-green-600 uppercase tracking-wider'>{label}</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={"#22c55e"} />
                </TouchableOpacity>
                )
                }
            </View>
        </View>
    );
}