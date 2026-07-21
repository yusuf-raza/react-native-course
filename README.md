# React Native Course

Course work, one self-contained Expo app per lesson section.

## Structure

```
react-native-course/
├── section-02-core-ui-components/   # Core UI components (expo-router)
└── section-04-ui-mastering/         # UI mastering (bare Expo template)
```

Each folder is an independent Expo app with its own `package.json` and
`node_modules` — there is no workspace or shared dependency tree. Naming is
`section-NN-topic` so folders sort in lesson order.

## Running an app

```sh
cd section-02-core-ui-components
npm install
npx expo start
```

Then scan the QR code with Expo Go, or press `i` / `a` for a simulator.

## Expo SDK

Both apps target **Expo SDK 54**, so a single Expo Go build runs either one.
Keep new sections on SDK 54 unless you also update the others — mismatched SDKs
mean Expo Go can only open a subset of the apps at a time.
