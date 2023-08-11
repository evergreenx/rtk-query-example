import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import { Link } from "expo-router";

export default function details() {
  return (
    <SafeAreaView className="flex-1 py-[60px] px-[20px]">
      <View className="flex-1 py-[20px] ">
        <Link href="/" className=" p-2">
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.2844 12.824C20.6877 12.7728 21 12.4233 21 12.0002C21 11.5418 20.6335 11.1698 20.1818 11.1698L5.79927 11.1698L10.9953 5.91866L11.0688 5.83385C11.3138 5.50912 11.2895 5.04236 10.9975 4.74399C10.6789 4.4196 10.1607 4.41849 9.84109 4.74177L3.24109 11.4123L3.16831 11.4958C3.05758 11.6419 3 11.8203 3 12.0002C3 12.1076 3.02073 12.215 3.06218 12.3168C3.18873 12.6279 3.48655 12.8305 3.81818 12.8305H20.1818L20.2844 12.824ZM10.9976 19.256C11.3161 18.9305 11.3161 18.4046 10.9954 18.0813L7.35502 14.4023L7.27097 14.328C6.94949 14.0804 6.49065 14.1062 6.19865 14.4045C6.03938 14.5673 5.95975 14.7787 5.95975 14.9902C5.95975 15.2039 6.03938 15.4165 6.20084 15.5792L9.84011 19.2582L9.92417 19.3323C10.2458 19.5791 10.7056 19.5534 10.9976 19.256Z"
              fill="#130F26"
            />
          </Svg>
        </Link>
        <View className="px-[32px]">
          <Image
            className="w-[311px] h-[311px] rounded-[10px] opacity-[0.8] "
            source={{
              uri: "https://res.cloudinary.com/evergreenx/image/upload/v1691341750/unsplash_J4DnKxz_3sA_klnoqh.png",
            }}
          />
        </View>

        <View className="px-[20px] mt-[33px]">
          <View className="flex-row justify-between ">
            <Text className="text-xl font-bold text-secondary">title</Text>

            <Text className="text-2xl font-medium text-primary mr-10">
              $799
            </Text>
          </View>

          <View className="mt-[20px]">
            <Text className="text-primary text-base font-medium">Details</Text>

            <Text className="text-[#9095A6] text-sm font-normal mt-[10px] w-[279px]">
              Call it a treasure chest or a mini portable world, handbags are
              indispensable in daily lifexx
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
