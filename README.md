# Social App Assignment – Expo/React Native

Welcome to the Social App! This repository demonstrates a job assignment for a modern, mobile-first onboarding and social experience built with Expo/React Native.

## Stack / Tooling

- **React Native (with Expo)**: Rapid mobile development, cross-platform iOS/Android
- **expo-router**: File-system-based navigation, enables intuitive app structure
- **TypeScript**: End-to-end static typing for maintainability
- **expo-image-picker**: Image upload from the photo library (with proper permissions)
- **react-native-safe-area-context**: Handles device notches and insets
- **react-native-keyboard-aware-scroll-view**: Smooth handling of keyboard and inputs
- **UserContext (React Context)**: Simple app-wide state (first name, last name, phone, topics, clubs, etc.)
- **Modular Components**: Reusable components including Inputs, Buttons, Topic/Club selectors, and navigation helpers (Skip/Back)

## Getting Started

1. **Install dependencies:**

   ```bash
   npx expo install
   # or
   npm install
   ```

2. **Start the project:**

   ```bash
   npx expo start
   ```

   Use your device (Expo Go), Android/iOS simulator, or web.

3. **Image picker permissions** (first use):
   On physical devices, Expo will ask for media permissions when uploading a photo. Grant when prompted.

## App Structure

- `/app/(Auth)/` – All onboarding screens (Phone, Verification, Name, Username, Age, AddPhoto, Topics, Clubs, Successful)
- `/components/` – Atom and molecule-level UI building blocks (Button, Input, etc.)
- `/contexts/UserContext.tsx` – Centralized user state for onboarding (all fields, topics/clubs, etc.)
- `/types/types.ts` – Type definitions for topics, clubs, props, and context
- `/constants/theme.ts` – Color, font, and spacing constants for styling consistency
- `/assets/` – Placeholder avatars, camera icon, and general static images

## Notable Functionalities

- **Onboarding Flow:**
  - Phone/country input, OPT step, names, username, age
  - Add photo (with preview, Expo image picker)
  - Choose up to 5 topics and 5 clubs (with logic for selection cap and UI feedback)
  - Each step persists in `UserContext` for later access/validation
  - Animated/button-based navigation and skip logic on each step
- **No Backend Required:**
  - All logic is client-only (stores selected data in React context). No networking or backend integration.
- **Modern UI/UX:**
  - Uses gradients, modern spacing, disabled/active widget feedback for buttons, themed components
  - Dark-mode styled with appropriate contrast

## Things to Note

- **Assignment Scope:**
  - Models are statically defined for topics and clubs (see `/types/types.ts` for shape)
  - Club images are placeholders in `/assets/images/`
  - No persistent storage, login, or API backend — focus was on UI, state, and flow
- **Navigation:**
  - Use the on-screen buttons or Expo Router links for progression through onboarding
- **Linter:**
  - The repo uses strong TypeScript typing. Minor style linter warnings may remain (e.g., import/exact-type usage)

## Demo/Test

- Open the onboarding flow, progress through all screens
- Try image uploading
- Select/deselect topics and clubs (enforcement of max 5, visual feedback)
- Inspect app state in context for user values

## Screenshots

<div align="center">
  <img width="30%" alt="Screen 1" src="https://github.com/user-attachments/assets/b8ed4034-95de-4332-9580-258e54549b1b" />
  <img width="30%" alt="Screen 2" src="https://github.com/user-attachments/assets/3201542e-8981-4ef3-bc54-7d71e6c3b400" />
  <img width="30%" alt="Screen 3" src="https://github.com/user-attachments/assets/7726f57c-cfc4-40b2-b181-d70818729516" />
  <img width="30%" alt="Screen 4" src="https://github.com/user-attachments/assets/afca7ccb-0928-4460-a679-a83ad0024d20" />
  <img width="30%" alt="Screen 5" src="https://github.com/user-attachments/assets/b0ba1e61-3cfd-4acd-ab1d-6d8664f35928" />
  <img width="30%" alt="Screen 6" src="https://github.com/user-attachments/assets/1699cca5-244b-44c7-be01-b2170de0c14b" />
  <img width="30%" alt="Screen 7" src="https://github.com/user-attachments/assets/7c6b37c6-27a5-42b0-956d-869851493d8e" />
  <img width="30%" alt="Screen 8" src="https://github.com/user-attachments/assets/e01f2787-6aec-439c-8141-6148ae092d26" />
  <img width="30%" alt="Screen 9" src="https://github.com/user-attachments/assets/1d054a6a-641e-452b-874d-7e036c30492c" />
</div>

---

**Good luck evaluating! Let me know if you need sample credentials or encounter any onboarding issues.**
