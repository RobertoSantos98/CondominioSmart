import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function LayoutStack() {
 return (
   <Stack screenOptions={{ headerShown: false}}>

    <Stack.Screen name='reservarEspaco' options={{ title: "Reservar Espaço"}} />
    
   </Stack>
  );
}