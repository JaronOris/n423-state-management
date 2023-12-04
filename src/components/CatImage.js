import React from "react";
import { Grid, Button, Image, Popup } from "semantic-ui-react";

export default function CatImage({ src, onClick }) {
  return (
    <Grid.Column>
      <Popup
        trigger={<Image src={src} />}
        on="click"
        content={
          <Button content="Like" icon="heart" color="red" onClick={onClick} />
        }
      />
    </Grid.Column>
  );
}
