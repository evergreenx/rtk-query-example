import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    onSearch(searchText); // Pass the searchText to the parent component or function for processing.
  };

  return (
    <View
      className={`py-[12px] px-[16px]  border border-inputBorder rounded-[40px] w-[268px] mb-[20px]`}
    >
      <TextInput
        className={`  text-[#1B153D8C] text-sm`}
        placeholder="Search Product"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchComponent;
