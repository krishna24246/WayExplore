# WayExplore 🌍

A React Native CLI application that helps students explore study abroad programs and universities around the world.

Built as a technical assignment for the **WayGood** React Native Internship.

---

## 📱 Screens

| Home Screen | Details Screen |
|---|---|
| Browse university programs with search | Full program details, intake, tuition & links |

### Features
- 🔍 **Live Search** — filter by university name or country
- 🃏 **Program Cards** — country flag, ranking badge, intake info
- 📖 **Details Screen** — full description, programs offered, tuition range
- 🌐 **Deep Links** — opens official university website
- ✨ **Smooth Animations** — screen entry fade + slide transitions
- 🌙 **Dark Theme** — premium dark UI with purple accent palette
- 📐 **Responsive Layout** — adapts to all screen sizes

---

## 🚀 Setup & Run

### Prerequisites
- Node.js >= 22
- React Native CLI environment set up ([official guide](https://reactnative.dev/docs/set-up-your-environment))
- Android Studio with an emulator or physical Android device
- JDK 17+

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd WayExplore

# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on Android (in a new terminal)
npm run android
```

### Run on iOS (macOS only)

```bash
cd ios && pod install && cd ..
npm run ios
```

---

## 🏗 Project Structure

```
WayExplore/
├── src/
│   ├── data/
│   │   └── programs.ts        # Static JSON data (8 universities)
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Stack navigator (Home → Details)
│   ├── screens/
│   │   ├── HomeScreen.tsx     # University list + search
│   │   └── DetailsScreen.tsx  # Full program details
│   ├── components/
│   │   └── ProgramCard.tsx    # Reusable card component
│   └── theme/
│       └── colors.ts          # Centralized color palette
├── App.tsx                    # Root component
└── index.js                   # Entry point
```

---

## 🛠 Tech Stack

| Library | Purpose |
|---|---|
| React Native CLI | App framework |
| TypeScript | Type safety |
| React Navigation v7 | Screen navigation |
| react-native-screens | Native screen optimization |
| react-native-safe-area-context | Safe area handling |
| react-native-gesture-handler | Touch gesture support |

---

## 🎨 Design Highlights

- **Dark theme** background `#0F0F1A` with card surfaces `#1E1E35`
- **Purple primary** `#5B4EFF` accent across badges, buttons and stats
- **Animated transitions** using React Native's `Animated` API (no external lib)
- **Responsive grids** using `flexWrap` and `Dimensions` API
- **Modular components** — `ProgramCard` is fully reusable and decoupled

---

## 📊 Data

The app uses 8 hand-crafted static university records with:
- University name, country & flag emoji
- Short + full description
- Available programs / majors
- Tuition range
- Intake months
- World ranking
- Official website URL

---

## 📬 Submission

This project was built for the WayGood React Native Intern assignment.

**Candidate:** [Your Name]  
**Email:** [Your Email]  
**GitHub:** [Your GitHub Profile]
