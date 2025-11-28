import { PrimaryButton } from "@/components/PrimaryButton";
import SkipButton from "@/components/SkipButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { useUser } from "@/contexts/UserContext";
import { Club } from "@/types/types";
import { Background } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CLUBS: (Club & { bg: string; img: any; desc: string })[] = [
  {
    id: 1,
    emoji: "🐶",
    label: "Dogs in Paris",
    bg: "#F8DD8B",
    img: require("../../assets/images/dog.png"),
    desc: "Meet the cute dogs in...",
  },
  {
    id: 2,
    emoji: "🍟",
    label: "Foooood",
    bg: "#B3C1EA",
    img: require("../../assets/images/dog2.png"),
    desc: "Welcome to the food ...",
  },
  {
    id: 3,
    emoji: "",
    label: "English Music Vibes",
    bg: "#AEC7BC",
    img: require("../../assets/images/dog3.png"),
    desc: "English music vibes fo...",
  },
  {
    id: 4,
    emoji: "",
    label: "NBA group",
    bg: "#F06B64",
    img: require("../../assets/images/dog4.png"),
    desc: "Let’s talk about NBA &...",
  },
  {
    id: 5,
    emoji: "",
    label: "Travel 2022",
    bg: "#EFE3D3",
    img: require("../../assets/images/dog5.png"),
    desc: "Join travel lovers club...",
  },
];

const Clubs = () => {
  const { userData, updateData } = useUser();
  const selectedClubIds = userData.clubs || [];

  const toggleClub = (clubId: number) => {
    const isSelected = selectedClubIds.includes(clubId);
    let newClubs: number[];
    if (isSelected) {
      newClubs = selectedClubIds.filter((id) => id !== clubId);
    } else {
      if (selectedClubIds.length >= 5) return;
      newClubs = [...selectedClubIds, clubId];
    }
    updateData("clubs", newClubs);
  };
  const isSelected = (clubId: number) => selectedClubIds.includes(clubId);

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <SkipButton onPress={() => router.push("/(Auth)/Welcome")} />
        <View style={styles.container}>
          <Text style={styles.title}>
            Here are some clubs you{"\n"}might enjoy. Tap to join a few
          </Text>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
          >
            {CLUBS.map((club) => (
              <View key={club.id} style={styles.clubCard}>
                <Image
                  source={club.img}
                  style={styles.clubImage}
                  resizeMode="cover"
                />
                <View style={styles.clubInfo}>
                  <Text numberOfLines={1} style={styles.clubName}>
                    {club.label} {club.emoji}
                  </Text>
                  <Text numberOfLines={1} style={styles.clubDesc}>
                    {club.desc}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.clubAddBtn,
                    isSelected(club.id) && styles.clubAddBtnSelected,
                  ]}
                  onPress={() => toggleClub(club.id)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.clubAddBtnText,
                      isSelected(club.id) && styles.clubAddBtnTextSelected,
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <PrimaryButton
            title="Let's go !"
            onPress={() => router.push("/(Auth)/Welcome")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Clubs;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.textPrimary,
    textAlign: "center",
    lineHeight: 34,
    marginBottom: SPACING.xl,
    marginTop: SPACING.xl,
  },
  clubCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 96,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    marginBottom: 8,
    gap: SPACING.m,
  },
  clubImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  clubInfo: {
    flex: 1,
    justifyContent: "center",
  },
  clubName: {
    fontFamily: FONTS.bold,
    fontWeight: 600,
    color: COLORS.textPrimary,
    fontSize: 16,
    marginBottom: 4,
  },
  clubDesc: {
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    fontSize: 14,
    flexShrink: 1,
    fontWeight: 400,
  },
  clubAddBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.textSecondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
    marginLeft: 12,
  },
  clubAddBtnText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  clubAddBtnSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  clubAddBtnTextSelected: {
    color: COLORS.white,
  },
  footer: {
    marginHorizontal: SPACING.l,
    marginBottom: SPACING.l,
  },
});
