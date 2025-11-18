import "styled-components";
import type { Theme } from "./theme/themes/theme";

declare module "styled-components" {
  // Map your app Theme to styled-components DefaultTheme
  export interface DefaultTheme extends Theme {}
}
