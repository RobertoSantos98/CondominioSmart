import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native'
import { useRef } from 'react';
import { useRouter } from 'expo-router';

interface SplashProps {
    onFinish: () => void;
}

export default function SplashScreenAnimation({ onFinish }: SplashProps) {

    const animation = useRef<LottieView>(null);
    const router = useRouter();


    // const onAnimationFinish = () => {
    //     router.replace('/');
    // }


 return (
   <View style={styles.container}>
    <LottieView
        ref={animation}
        source={require('../assets/SplashScreen.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onFinish}
        style={styles.animation}
        resizeMode='cover'
    />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: '100%',
        height: '100%'
    }

})