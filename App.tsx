import LoginInputs from 'components/LoginInputs';
import './global.css';
import { Text, SafeAreaView, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 mt-[50]">
      <View className="  mt-6 flex-1 items-center">
        <Text >
          <Image
            className="mt-4 h-[150px] w-[150px] rounded-full"
            source={require('./assets/panda.png')}
          />
        </Text>
        <Text className="mt-5 text-5xl font-bold text-black">Login</Text>
      </View>

      <View className="align-items-center flex-1">
        <LoginInputs label="Your Name" placeholder="Enter your name" type="text" />
        <LoginInputs label="Email" placeholder="Enter your email" type="text" />
        <LoginInputs label="Password" placeholder="Enter your password" type="password" />
      </View>
    </SafeAreaView>
  );
}
