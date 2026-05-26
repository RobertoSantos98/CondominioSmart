import { Button, View } from 'react-native';

import { useAuth } from '@/hooks/useAuth';

export default function SignIn() {

    const { signIn } = useAuth();


 return (
   <View className='flex-1 justify-center items-center'>
    <Button title='Entrar' onPress={signIn} />
   </View>
  );
}