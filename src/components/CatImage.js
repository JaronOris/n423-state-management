import React from "react";
import { Grid, Button, Image, Popup, Menu } from "semantic-ui-react";
import Link from "next/link";

export default function CatImage({ src, onClick, id }) {
  return (
    <Grid.Column>
      <Popup
        trigger={<Image src={src} />}
        on="click"
        content={
          <Grid divided columns="equal">
            <Menu>
              <Menu.Item>
                <Button
                  content="Like"
                  icon="heart"
                  color="red"
                  onClick={onClick}
                  fluid
                />
              </Menu.Item>
              <Menu.Item>
                <Button
                  content="Info"
                  icon="list"
                  color="green"
                  as={Link}
                  href={`/${id}`}
                  fluid
                />
              </Menu.Item>
            </Menu>
          </Grid>
        }
      />
    </Grid.Column>
  );
}
