import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Button from "../Button";

storiesOf("Atoms/Button", module)
  .addDecorator(withKnobs)
  .add("Default", () => <Button>ボタン</Button>);
