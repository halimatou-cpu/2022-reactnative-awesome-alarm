import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TemplateBase from "../components/base/TemplateBase";

export default function HomeScreen(){
	return (
    <TemplateBase>
      <View>
        <Text
          style={styles.textStyle}
        >
          Hello from HomeScreen ⌂
        </Text>
      </View>
    </TemplateBase>
  );
}

const styles = StyleSheet.create({
	textStyle: {
		color: " #1c2833",
		fontSize: 30,
		marginStart: 15,
		textAlign: "center",
	  }
})