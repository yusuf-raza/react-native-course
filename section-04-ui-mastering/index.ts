import { registerRootComponent } from "expo";

import App from "./src/App";

// Entry point. registerRootComponent wraps AppRegistry.registerComponent and
// works in both Expo Go and native builds. Flutter parallel: runApp(MyApp()).
registerRootComponent(App);
