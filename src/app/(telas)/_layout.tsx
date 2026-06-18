import { useAuth } from '@/hooks/useAuth';
import { Redirect, Stack } from 'expo-router';

export default function LayoutStack() {

  const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Redirect href="/signin" />;
    }
 return (
   <Stack screenOptions={{ headerShown: false}}>

    <Stack.Screen name='reservarEspaco' options={{ title: "Reservar Espaço"}} />
    
   </Stack>
  );
}