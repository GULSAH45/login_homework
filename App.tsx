import LoginInputs from 'components/LoginInputs';
import './global.css';
import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="mt-[50] flex-1">
      <View className="  mt-6 flex-1 items-center">
        <Text>
          <Image
            className="mt-4 h-[150px] w-[150px] rounded-full"
            source={require('./assets/panda.png')}
          />
        </Text>
        <Text className="mt-5 text-5xl font-bold text-black">Login</Text>
      </View>

      <View className="align-items-center flex-1 mt-[-300] mb-[50]">
        <LoginInputs label="Your Name" placeholder="Enter your name" type="text" />
        <LoginInputs label="Email" placeholder="Enter your email" type="text" />
        <LoginInputs label="Password" placeholder="Enter your password" type="password" />
      </View>
      <TouchableOpacity>
        <Text className='text-center rounded-full text-white font-bold text-xl m-5 p-1 h-[40px] bg-orange-500'>GO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
