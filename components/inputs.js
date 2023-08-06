import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Svg, { Circle, Rect, Path } from "react-native-svg";

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    onSearch(searchText); // Pass the searchText to the parent component or function for processing.
  };

  return (
    <View
      className={`py-[12px] px-[16px] space-x-[16px]  border border-inputBorder rounded-[40px] w-[268px]  flex-row items-center]`}
    >
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"
          fill="#1B153D"
        />
      </Svg>

      <TextInput
        className={`  text-[#1B153D8C] text-sm leading-tight `}
        placeholder="Search Product"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchComponent;
