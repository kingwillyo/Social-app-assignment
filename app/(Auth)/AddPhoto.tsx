import { PrimaryButton } from "@/components/PrimaryButton";
import {SkipButton} from "@/components/SkipButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { useUser } from "@/contexts/UserContext";
import { Background } from "@react-navigation/elements";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddPhoto = () => {
  const { userData, updateData } = useUser();
  const [image, setImage] = React.useState<string | null>(userData.photo);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Sorry, we need camera roll permissions to upload photos!"
      );
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      updateData("photo", imageUri);
    }
  };

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <SkipButton onPress={() => router.push("/(Auth)/Topics")} />
        <View>
          <Text style={styles.title}>Add a photo ?</Text>
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.selectedImage}
                resizeMode="cover"
              />
            ) : (
              <Image source={require("../../assets/images/camera.png")} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.footer}>
          <PrimaryButton
            title="Next"
            onPress={() => router.push("/(Auth)/Topics")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.textPrimary,
    textAlign: "center",
    lineHeight: 40,
    marginBottom: SPACING.xxl,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  footer: {
    marginHorizontal: 24,
  },
});
