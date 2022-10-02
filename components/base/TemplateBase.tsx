import React from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { StyleSheet } from "react-native";

interface IProps {
	children: any;
}

export default function TemplateBase({
	children
}: IProps){

	const backgroundImage = require("../../assets/images/moon.jpeg")
	
	return <KeyboardAvoidingView behavior={"height"} style={styles.screen}>
		<View style={styles.screen}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.background}
			>
				<ScrollView>
					<View style={styles.container}>{children}</View>
				</ScrollView>
			</ImageBackground>
		</View>
		<StatusBar hidden={true} />
	</KeyboardAvoidingView>
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	  },
	  background: {
		flex: 1,
	  },
	  container: {
		marginTop: 30,
		//alignItems: 'center',
		flexDirection: "column",
		//justifyContent: 'space-between',
		marginLeft: 40,
		marginRight: 40,
	  },
	  logo: {
		marginTop: 60,
		resizeMode: "contain",
		height: 100,
		width: 170,
		marginBottom: 40,
	  },
})