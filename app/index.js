import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import SearchComponent from "../components/inputs";

import { FlashList } from "@shopify/flash-list";
import React from "react";
import ProductsCard from "../components/productsCard";
import Svg, { Path } from "react-native-svg";


export default function Page() {
  const [searchText, setSearchText] = React.useState("");

  const _renderItem = (item) => {
    return <ProductsCard item={item} />;
  };

  const DATA = [
    {
      title: "Classic Leather Watch",
      price: 89.99,
      description:
        "Elevate your style with this classic leather watch. Featuring a genuine leather strap and a timeless design, this watch is perfect for any occasion.",
    },
    {
      title: "Wireless Bluetooth Earbuds",
      price: 49.99,
      description:
        "Experience music like never before with our high-quality wireless Bluetooth earbuds. Enjoy crisp sound, comfortable fit, and long battery life.",
    },
    {
      title: "Floral Print Maxi Dress",
      price: 59.99,
      description:
        "Embrace the beauty of nature with our elegant floral print maxi dress. Made from lightweight fabric, this dress is both comfortable and stylish for your summer outings.",
    },
    {
      title: "Smart Home Security Camera",
      price: 129.99,
      description:
        "Keep your home safe and secure with our advanced smart home security camera. Monitor your property from anywhere with real-time HD video and motion detection.",
    },
    {
      title: "Gourmet Coffee Sampler Pack",
      price: 19.99,
      description:
        "Indulge in a variety of rich and flavorful coffees with our gourmet coffee sampler pack. Discover new blends and awaken your taste buds.",
    },
    {
      title: "Laptop Backpack with USB Charging Port",
      price: 39.99,
      description:
        "Stay organized and connected on the go with our laptop backpack featuring a built-in USB charging port. Ample storage and ergonomic design make it a perfect travel companion.",
    },
    {
      title: "Fitness Resistance Bands Set",
      price: 29.99,
      description:
        "Achieve your fitness goals with our versatile resistance bands set. Perfect for home workouts, these bands offer varying levels of resistance for a full-body workout.",
    },
    {
      title: "Organic Skincare Gift Set",
      price: 79.99,
      description:
        "Treat your skin to luxury with our organic skincare gift set. Packed with nourishing ingredients, this set includes cleanser, moisturizer, and serum for a radiant complexion.",
    },
    {
      title: "Portable Solar Charger",
      price: 49.99,
      description:
        "Harness the power of the sun with our portable solar charger. Keep your devices charged during outdoor adventures and emergencies.",
    },
    {
      title: "Handcrafted Leather Wallet",
      price: 39.99,
      description:
        "Experience the craftsmanship of our handcrafted leather wallet. With multiple card slots and a sleek design, it's both functional and stylish.",
    },
  ];


  const renderHeader = () => {
    return (
      <View>
        <Text className=" font-bold text-secondary text-[36px]">
          Find your suitable product now.
        </Text>
      </View>
    );
  };

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
          data={DATA}
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
