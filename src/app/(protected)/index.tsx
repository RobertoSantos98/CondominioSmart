import { View, Button} from 'react-native'

import { useAuth } from '@/hooks/useAuth'

export default function Index() {

    const { signOut } = useAuth();

    return (
        <View className='flex-1 justify-center items-center'>
            <Button title='Sair' onPress={signOut}/>
        </View>
    )
}