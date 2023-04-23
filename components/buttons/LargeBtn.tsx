import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
  TextProps,
} from "react-native";
import { Text } from "../layout";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  iconName: any;
  style?: ViewStyle;
}

const LargeBtn: FC<CustomButtonProps> = ({
  title,
  iconName,
  onPress,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, , styles.shadowProp, style]}
      {...rest}
    >
      <Ionicons name={iconName} size={24} color="white" />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: COLORS.black[1],
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    color: "#FFFFFF",
    paddingLeft: 10,
  },
  shadowProp: {
    shadowColor: "#bcb5b5",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 16,
  },
});

export default LargeBtn;
