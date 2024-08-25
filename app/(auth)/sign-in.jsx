import { Text, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';

const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='conn'
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

