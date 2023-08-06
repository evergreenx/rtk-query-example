import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductsCard() {
  return (
    <Link 
    href="/details"
    className="mt-[30px]  p-[8px] flex-1 justify-center ">
      <View className="">
        <Image
          className="w-[141px] h-[101px] rounded-[10px]"
          source={{
            uri: "https://res.cloudinary.com/evergreenx/image/upload/v1691341750/unsplash_J4DnKxz_3sA_klnoqh.png",
          }}
        />
        <Text className="text-secondary font-semibold text-base text-left mt-[16px] mb-[8px]">
          Title
        </Text>

        <Text className="text-primary text-base font-medium">$Price</Text>
      </View>
    </Link>
  );
}
