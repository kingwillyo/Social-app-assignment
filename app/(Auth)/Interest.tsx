import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PrimaryButton, ScreenContainer } from "../../components/shared";
import { COLORS, FONTS, SPACING } from "../../constants/theme";
import { useUser } from "../../contexts/UserContext";
import { Topic } from "../../types/types";

const TOPICS: Topic[] = [
  { id: 1, emoji: "🌱", label: "Mindfulness" },
  { id: 2, emoji: "🍔", label: "Food" },
  { id: 3, emoji: "🐶", label: "Dogs" },
  { id: 4, emoji: "🏃", label: "Sport" },
  { id: 5, emoji: "✈️", label: "Travel" },
  { id: 6, emoji: "💡", label: "Tech" },
];

type InterestStackParamList = { Topics: undefined; Clubs: undefined };

// 8. Topics Selection
export const TopicsScreen: React.FC<
  StackScreenProps<InterestStackParamList, "Topics">
> = ({ navigation }) => {
  const { userData, updateData } = useUser();
  const isValid = userData.topics.length >= 3; // Enforce minimum selection

  const toggleTopic = (id: number) => {
    const current = userData.topics;
    if (current.includes(id)) {
      updateData(
        "topics",
        current.filter((t) => t !== id)
      );
    } else {
      updateData("topics", [...current, id]);
    }
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>
        What are 5 topics you enjoy talking about?
      </Text>

      {/* Shows FlexWrap logic from screenshot */}
      <View style={styles.grid}>
        {TOPICS.map((topic) => {
          const isActive = userData.topics.includes(topic.id);
          return (
            <TouchableOpacity
              key={topic.id}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => toggleTopic(topic.id)}
            >
              <Text
                style={[styles.chipText, isActive && styles.activeChipText]}
              >
                {topic.emoji} {topic.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ flex: 1 }} />
      <PrimaryButton
        title="Next"
        onPress={() => navigation.navigate("Clubs")}
        disabled={!isValid}
      />
    </ScreenContainer>
  );
};

// 9. Club Suggestions
export const ClubsScreen: React.FC<
  StackScreenProps<InterestStackParamList, "Clubs">
> = ({ navigation }) => (
  <ScreenContainer>
    <Text style={styles.title}>Here are some clubs you might enjoy.</Text>

    <ScrollView style={{ marginTop: SPACING.m }}>
      {/* Mock Club Card structure - use FlatList in a real app */}
      <ClubCard
        title="Dogs in Paris 🐶"
        description="Meet the cute dogs in the 16th arrondissement."
      />
      <ClubCard
        title="Plant Parents 🌱"
        description="Tips and tricks for your growing jungle."
      />
    </ScrollView>

    <PrimaryButton
      title="Let's go!"
      onPress={() =>
        alert(`Onboarding Complete for ${useUser().userData.username}!`)
      }
    />
  </ScreenContainer>
);

const ClubCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <View style={clubCardStyles.card}>
    <View style={clubCardStyles.iconPlaceholder} />
    <View style={clubCardStyles.textContainer}>
      <Text style={clubCardStyles.cardTitle}>{title}</Text>
      <Text style={clubCardStyles.cardDescription}>{description}</Text>
    </View>
    <TouchableOpacity style={clubCardStyles.addButton}>
      <Text style={{ color: COLORS.textPrimary, fontFamily: FONTS.bold }}>
        +
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: SPACING.m,
  },
  chip: {
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeChip: { backgroundColor: "white" },
  chipText: { color: "white", fontWeight: "500", fontFamily: FONTS.regular },
  activeChipText: { color: "black", fontFamily: FONTS.regular },
});

const clubCardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surfaceLight,
    padding: 16,
    borderRadius: 16,
    marginBottom: SPACING.m,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  textContainer: { marginLeft: SPACING.m, flex: 1 },
  cardTitle: { color: "white", fontFamily: FONTS.bold, fontSize: 16 },
  cardDescription: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.textPrimary,
    borderWidth: 1,
  },
});
