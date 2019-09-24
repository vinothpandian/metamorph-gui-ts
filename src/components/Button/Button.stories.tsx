import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as React from "react";
import Button from ".";
import FullPageStory from "../FullPageStory";

const onClick = action("Clicked");

storiesOf("Button", module)
  .addDecorator(story => <FullPageStory>{story()}</FullPageStory>)
  .add("with text", () => <Button onClick={onClick}>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button onClick={onClick}>
      <span role="img" aria-label="emojis">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
