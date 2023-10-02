# Ioconic Assessment for Greg Hamilton

A super simple movie quotes app, built following Ryan's brief.

## Setup

### Requirements

- Expo Go app installed on your device

### 🚀 How to use

- Clone repo
- Run `yarn`
- Run `yarn start`
- Choose your platform if you have an Android or iOS simulator/emulator running (press a or i in the terminal to auto install Expo Go on the virtual device and run the app), or follow the instructions in the terminal to scan the QR code and open with the Expo Go app on your physical device.

## 📝 Greg's notes - Planning the project

What are the challenges of meeting the early requirements?

### Responsive design

I'll build for mobile first, but ensure a 100% responsive UI. I might use a UI framework like Tailwind or a library like React Native Paper. To begin with, I'll start with integrating Tailwind, as that gives us an entire styling system that can be used if needed. I'll add some very basic styling just to make the prototype usable, and won't use Paper for now as there are so few components needed.

### Adding quotes

I'm considering UX here. It feels like it might make sense to put the user input and the list of quotes on the same screen, with the input at the top of the UI. I'll take inspiration from a typical todo list UI. I'm considering the fact it might be annoying for the user if they can't easily edit a quote, and have to delete one in order to correct or re-add it. I'll consider intuitive edit and delete functionality even though it's not in the brief, as this is very likely to come up later.

### Ordering quotes

I'm immediately thinking drag and drop reordering would be nice to have. Another option might be to use up/down arrows, especially as these would be familiar when the potential up-voting feature comes in later. I'm thinking a RN FlatList will do the job as it optimises the performance of larger lists. I might focus on making a FlatList with drag and drop re-ordering as the priority.

### Data Persistance

As there's no immediate requirement for remote storage, I'll skip that now, as it's relatively time consuming and straightforward to implement once core functionality has been proven. I'll aim to use local device storage to persist data acrosss app sessions for now, but build the storage functionality so that it can be extended with remote CRUD operations later, potentially with support for offline mode. When it comes to cross-device real-time syncing, I'm thinking Supabase would be a great back-end option later because it supports real-time state management and row-level security with minimal effort.

### Navigation

To build the early requirements, I envisage only one screen, meaning navigation is not required. In future, the desired features suggest additional screens such as a global quotes leaderboard with upvoting and user specific/auth screens. Because future navigation is almost a certainty, I'll build the app with tab based navigation using Expo Router, with support navigation inside and outside of tabs but for now, I'll stick to one tab for the personal quotes list and a second tab for the future global leaderboard. I think it's easier to lay and test navigational foundations early and as far as possible in the project, as it can be tricky once complexity increases. Having the second tab in the prototype might also help users to envisage and shape the UX as early as possible, and the second tab can easily be hidden/removed/changed.

### Other pre-start decisions

I'll use Expo and Typescript for this project as they provide the best all-round development experience. Normally I would be very methodical with my commenting, to help other developers to understand my code but in this case, as the project is very simple and has no life beyond this assessment, I'll skip commenting in favour of this readme.

## 📝 Greg's decision log - whilst building:

1. I'll skip thinking about splash screen, app icon and even fonts to save time and focus on core UX. I'll add a little styling with Tailwind to keep the app feeling like a prototype but make it usable. To do this I'll need just a little colour and spacing to make elements a usable size.

2. I'll use @expo/vector-icons as this library gives a huge choice of icon sets in future, and for now it can provide icons for the tab bar.

3. Started with the user text input. Decided to go with a single line RN TextInput component as this feels sufficient and text can be submitted using the device native keyboard. If there's a UX need to make this multi-line, that can easily be done. We'll just have to make sure we cover platform differences between iOS and Android, and consider adding a seperate button in the UI to submit the text.

4. Decided to use react-native-draggable-flatlist library as it seems to be well supported and stable. It'll be faster than building my own drag and drop re-ordering to the RN FlatList with my own animations. Tried and happy with the results. Had to add a little colour to make it clear when the user has long tapped on quote cards. Works well as a prototype.

5. Decided to add some simple text based components to guide the user along. Added some get started text and a help tip to inform the user that re-ordering requires a long press as this is not intuitive on it's own. Seems to improve UX.

6. Decided to use @react-native-async-storage/async-storage for the early requirement of local storage as it's well supported and compatible with Expo. Using a simple side effect to fetch stored list data on load and keep local storage in sync as the user makes changes in the UI. The helper functions can easily be extended to keep a remote DB in sync as well. Decided to keep the state in local storage and the main screen component for now as there's no requirement yet to share state across components. This can easily be extended using the React Context API or a state management library such as Redux.

7. Core functionality is built. Haven't got round to editing or deleting quotes yet. UI is tested and working on iPhone 13, Pixel 4 (Android Phone) API 33 and Pixel C (Android Tablet) API 33 portrait and landscape modes. As I've still got a little time left, I'll focus on upgrading the data structure of the quotes. I've built them as single strings, but structuring them as objects will be much more extensible in the future, as it will allow us to use unique identifiers and add supporting information such as the author and even the movie.

8. Decided to use the expo-crypto library to handle UUID creation for unique ID assignment to quote objects. Refactored string array into object array with custom type for safety.

9. Still have a little time so I'll add functionality to delete and edit quotes. This feels like the most important improvement to work on next.

10. OK, at 3 hrs I've built delete quote functionality but run out of time. That was fun!
