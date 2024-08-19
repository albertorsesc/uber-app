import { View, Text, Image } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        onPress={handleGoogleSignIn}
        title="Log In with Google"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        className="mt-5 w-full shadow-none"
      />
    </View>
  );
};

export default OAuth;
