import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type TitleLabelProps = {
    title: string,
    label: string,
    onPress: () => void
}

export default function TitleLabel({title, label, onPress}: TitleLabelProps) {
    return (
        <View className='px-4 py-1 justify-center'>
            <View className='flex-row justify-between items-center'>
                <Text className='font-bold text-lg'>{title}</Text>
                <TouchableOpacity className='flex-row items-center justify-center gap-1 py-1 px-2 rounded-full border border-gray-300' onPress={onPress}>
                    <Text className='text-gray-400'>{label}</Text>
                    <MaterialIcons name='keyboard-double-arrow-right' size={20} color={"#22c55e"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}