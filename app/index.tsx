import { Redirect } from "expo-router";
import "react-native-reanimated";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Home;
