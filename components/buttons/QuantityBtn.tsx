import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";
import { Text, View } from "../layout";

interface QuantityButtonProps {
  initialQuantity?: number;
  maxQuantity: number;
}

const QuantityBtn: React.FC<QuantityButtonProps> = ({
  initialQuantity = 1,
  maxQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > initialQuantity) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
        <Text
          style={[
            styles.buttonText,
            {
              color:
                quantity > initialQuantity ? COLORS.black[1] : COLORS.gray[1],
            },
          ]}
        >
          -
        </Text>
      </TouchableOpacity>
      <Text style={styles.number}>{quantity}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
        <Text
          style={[
            styles.buttonText,
            {
              color: quantity < maxQuantity ? COLORS.black[1] : COLORS.gray[1],
            },
          ]}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray[2],
    borderRadius: 50,
    paddingVertical: 6,
    width: Dimensions.get("window").width * 0.35,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "100",
  },
  number: {
    marginHorizontal: 16,
    color: "black",
    fontSize: 20,
    fontWeight: "200",
  },
});

export default QuantityBtn;
