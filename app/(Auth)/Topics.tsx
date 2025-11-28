import { PrimaryButton } from "@/components/PrimaryButton";
import SkipButton from "@/components/SkipButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { useUser } from "@/contexts/UserContext";
import { Topic } from "@/types/types";
import { Background } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TOPICS: Topic[] = [
  { id: 1, emoji: "🍟", label: "Food" },
  { id: 2, emoji: "🐶", label: "Dogs" },
  { id: 3, emoji: "🌴", label: "Travel" },
  { id: 4, emoji: "🎮", label: "Gaming" },
  { id: 5, emoji: "🎧", label: "Music" },
  { id: 6, emoji: "🌱", label: "Mindfulness" },
  { id: 7, emoji: "🏃", label: "Sport" },
  { id: 8, emoji: "💅", label: "Beauty" },
  { id: 9, emoji: "🏀", label: "Relationships" },
  { id: 10, emoji: "👗", label: "Mode" },
  { id: 11, emoji: "🎓", label: "Education" },
  { id: 12, emoji: "🐳", label: "Animals" },
  { id: 13, emoji: "🌙", label: "Late night" },
  { id: 14, emoji: "🍎", label: "Health" },
  { id: 15, emoji: "☕", label: "Advice" },
  { id: 16, emoji: "🍼", label: "Maternity" },
  { id: 17, emoji: "🚀", label: "Start up" },
  { id: 18, emoji: "🔮", label: "Spirituality" },
  { id: 19, emoji: "📖", label: "Books" },
  { id: 20, emoji: "🤑", label: "Crypto" },
];

const Topics = () => {
  const { userData, updateData } = useUser();
  const selectedTopicIds = userData.topics || [];

  const toggleTopic = (topicId: number) => {
    const isSelected = selectedTopicIds.includes(topicId);
    let newTopics: number[];

    if (isSelected) {
      // Remove topic
      newTopics = selectedTopicIds.filter((id) => id !== topicId);
    } else {
      // Add topic (max 5)
      if (selectedTopicIds.length >= 5) {
        return; // Don't allow more than 5 selections
      }
      newTopics = [...selectedTopicIds, topicId];
    }

    updateData("topics", newTopics);
  };

  const isSelected = (topicId: number) => selectedTopicIds.includes(topicId);

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <SkipButton onPress={() => router.push("/(Auth)/Clubs")} />
        <View style={styles.container}>
          <Text style={styles.title}>
            What are 5 topics you enjoy talking about
          </Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.topicsGrid}
            showsVerticalScrollIndicator={false}
          >
            {TOPICS.map((topic) => {
              const selected = isSelected(topic.id);
              return (
                <TouchableOpacity
                  key={topic.id}
                  style={[
                    styles.topicButton,
                    selected && styles.topicButtonSelected,
                  ]}
                  onPress={() => toggleTopic(topic.id)}
                  disabled={!selected && selectedTopicIds.length >= 5}
                >
                  <Text style={styles.topicEmoji}>{topic.emoji}</Text>
                  <Text
                    style={[
                      styles.topicLabel,
                      selected && styles.topicLabelSelected,
                    ]}
                  >
                    {topic.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <PrimaryButton
            title="Next"
            onPress={() => router.push("/(Auth)/Clubs")}
            disabled={selectedTopicIds.length === 0}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Topics;

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
    lineHeight: 40,
    marginBottom: SPACING.xxl,
  },
  scrollView: {
    flex: 1,
  },
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingBottom: SPACING.l,
  },
  topicButton: {
    width: (Dimensions.get("window").width - 32 - SPACING.m) / 2, // screen width - container margin - gap, divided by 2
    backgroundColor: COLORS.surfaceLight,
    borderRadius: SPACING.s,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderColor: COLORS.surfaceLight,
  },
  topicButtonSelected: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.background,
  },
  topicEmoji: {
    fontSize: 16,
    textAlign: "center",
  },
  topicLabel: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: "center",
  },
  topicLabelSelected: {
    color: COLORS.background,
    fontFamily: FONTS.bold,
  },
  footer: {
    marginHorizontal: SPACING.l,
    marginBottom: SPACING.l,
  },
});
