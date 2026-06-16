import { View, TextInput, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

type InputProps = {
    name: string,
    icone: React.ComponentProps<typeof MaterialCommunityIcons>["name"]
}

export default function Input({name, icone}: InputProps) {
 return (
   <View className='gap-2'>
        <Text className='ml-2 text-gray-800'>{name} :</Text>
        <View className='items-center bg-green-50 flex-row border border-green-200 rounded-2xl p-2'>
          <MaterialCommunityIcons name={icone} size={18} color={"#22c55e"} style={{paddingHorizontal: 8}}/>
          <TextInput className=' text-gray-800 w-full'/>
        </View>
   </View>
  );
}