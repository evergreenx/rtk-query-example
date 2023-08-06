import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SearchComponent from "../components/inputs";
import React from "react";
import ProductsCard from "../components/productsCard";

export default function Page() {
  const [searchText, setSearchText] = React.useState("");

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 bg-white px-[20px] py-[20px]  ">
        <SearchComponent />

        <Text className=" font-bold text-secondary text-[36px]">
          Find your suitable product now.
        </Text>

        <View className="flex flex-row flex-wrap space-x-28">
          {Array(10)
            .fill()
            .map((_, i) => (
              <ProductsCard key={i} />
            ))}
          <ProductsCard />
        </View>
      </View>
    </SafeAreaView>
  );
}
