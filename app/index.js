import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import SearchComponent from "../components/inputs";

import { FlashList } from "@shopify/flash-list";
import React from "react";
import ProductsCard from "../components/productsCard";
import Svg, { Path } from "react-native-svg";
import { useGetProductsQuery } from "../features/api/apiProductSlice";

export default function Page() {
  const [searchText, setSearchText] = React.useState("");

  const { data, error, isLoading, isError } = useGetProductsQuery();

  const _renderItem = (item) => {
    return <ProductsCard item={item} />;
  };

  const renderHeader = () => {
    return (
      <View>
        <Text className=" font-bold text-secondary text-[36px]">
          Find your suitable product now.
        </Text>
      </View>
    );
  };

  if (isLoading)
    return (
      <View className="py-20">
        <ActivityIndicator color={"#1B153D"} size={50} />
      </View>
    );

  if (isError)
    return (
      <View className="py-20">
        <Text className="text-center text-red-500 font-bold  text-[26px] ">
          Something went wrong
        </Text>
        <Text className="text-center text-red-400 font-bold text-[26px] ">
          we are working on it ASAP 🙏
        </Text>
      </View>
    );

  return (
    <SafeAreaView className="flex-1 bg-white pt-[60px] ">
      <View className="flex-1 bg-white px-[20px] pt-[20px] ">
        <View className="flex-row  justify-between mb-[20px] ">
          <View className="flex-row self-center">
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M1 12.3333H12.9014M1 5H23M1 19.6667H23"
                stroke="#1B153D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>

          <SearchComponent />
        </View>

        <FlashList
          data={data}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => _renderItem(item)}
          estimatedItemSize={200}
          contentContainerStyle={{
            padding: 5,
          }}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </SafeAreaView>
  );
}
