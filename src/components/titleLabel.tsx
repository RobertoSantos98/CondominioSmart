import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type TitleLabelProps = {
    title: string,
    label: string,
    onPress: () => void
}

export default function TitleLabel({title, label, onPress}: TitleLabelProps) {
    return (
        <View className='px-4 py-2'>
            <View className='flex-row justify-between items-center'>
                <Text className='font-bold text-lg'>{title}</Text>
                <TouchableOpacity className='flex-row items-center justify-center gap-1' onPress={onPress}>
                    <Text className='font-bold text-gray-400'>{label}</Text>
                    <MaterialIcons name='keyboard-double-arrow-right' size={20} color={"#84cc16"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}