import React from "react";
import useAppState from "@/useHooks/useAppState";
import { Grid, Button, Header } from "semantic-ui-react";

export default function Favorites() {
  const appState = useAppState();

  console.log(appState);

  function changeName() {
    const titles = ["Little", "Big", "Mungo"];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);

    appState.updateAppState({
      user: `The ${titles[randomTitleIndex]} Guy`,
    });
  }

  return (
    <>
      <Grid columns="1">
        <Grid.Column>
          <Header as="h1">{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button
            content="Random Name"
            color="blue"
            icon="sync"
            onClick={changeName}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}
