import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as React from "react";
import Button from ".";
import FullPage from "../FullPage";

const onClick = action("Clicked");

storiesOf("Button", module)
  .addDecorator(story => <FullPage>{story()}</FullPage>)
  .add("with text", () => <Button onClick={onClick}>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button onClick={onClick}>
      <span role="img" aria-label="emojis">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
