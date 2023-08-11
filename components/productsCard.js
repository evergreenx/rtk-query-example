import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductsCard({ item }) {
  return (
    <Link href="/details" className="mt-[30px]  p-[8px] flex-1 justify-center ">
      <View className="">
        <Image
          className="w-[191px] h-[101px] rounded-[10px]"
          source={{
            uri: item.image,
          }}
        />
        <Text className="text-secondary font-semibold text-base text-left mt-[16px] mb-[8px]">
          {item.title.length > 15
            ? item.title.substring(0, 15) + "..."
            : item.title}
        </Text>

        <Text className="text-primary text-base font-medium">
          ${item.price}
        </Text>
      </View>
    </Link>
  );
}
