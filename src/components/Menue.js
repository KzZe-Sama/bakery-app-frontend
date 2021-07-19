import React from "react";
import {
  Container,
  Header,
  Grid,
  Divider,
  Segment,
  Label,
  List,
  Icon,
} from "semantic-ui-react";

const Menue = (props) => {
  const donuts = props.data;
  return (
    <>
      {console.log(props.data)}
      <div className="divMenueBodyMain">
        <Header as="h1" block className="headerMenue" color="black">
          Menue
        </Header>
        <Container>
          <Grid columns={2}>
            <Grid.Column>
              <Segment raised>
                <Label as="a" color="red" ribbon>
                  Doughnut
                </Label>
                <p>
                  {donuts.map((data) => (
                    <List key={data.item_id}>
                      <List.Item>
                        <List.Item className="listItemDiv">
                          {data.name}
                          .................................................................................................................
                          <List.Content floated="right">
                            {data.price}
                          </List.Content>
                        </List.Item>
                      </List.Item>
                    </List>
                  ))}
                </p>
                <Label as="a" color="blue" ribbon>
                  Pasteries
                </Label>
                <p>
                  {donuts.map((data) => (
                    <List key={data.item_id}>
                      <List.Item className="listItemDiv">
                        <List.Item>
                          {data.name}
                          .................................................................................................................
                          <List.Content floated="right">
                            {data.price}
                          </List.Content>
                        </List.Item>
                      </List.Item>
                    </List>
                  ))}
                </p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Label as="a" color="orange" ribbon="right">
                  Cakes
                </Label>
                <p>
                  {donuts.map((data) => (
                    <List key={data.item_id}>
                      <List.Item className="listItemDiv">
                        <List.Item>
                          {data.name}
                          .................................................................................................................
                          <List.Content floated="right">
                            {data.price}
                          </List.Content>
                        </List.Item>
                      </List.Item>
                    </List>
                  ))}
                </p>
                <Label as="a" color="teal" ribbon="right">
                  Cupcakes
                </Label>
                <p>
                  {donuts.map((data) => (
                    <List key={data.item_id}>
                      <List.Item className="listItemDiv">
                        <List.Item>
                          {data.name}
                          .................................................................................................................
                          <List.Content floated="right">
                            {data.price}
                          </List.Content>
                        </List.Item>
                      </List.Item>
                    </List>
                  ))}
                </p>
              </Segment>
            </Grid.Column>
          </Grid>
          <Segment raised>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <p>
                  {donuts.map((data) => (
                    <List key={data.item_id}>
                      <List.Item className="listItemDiv">
                        <List.Item>
                          {data.name}
                          .................................................................................................................
                          <List.Content floated="right">
                            {data.price}
                          </List.Content>
                        </List.Item>
                      </List.Item>
                    </List>
                  ))}
                </p>
              </Grid.Column>

              <Grid.Column>
                {donuts.map((data) => (
                  <List key={data.item_id}>
                    <List.Item className="listItemDiv">
                      <List.Item>
                        {data.name}
                        .................................................................................................................
                        <List.Content floated="right">
                          {data.price}
                        </List.Content>
                      </List.Item>
                    </List.Item>
                  </List>
                ))}
              </Grid.Column>
            </Grid>

            <Divider vertical>
              <Icon name="coffee" />
              <p>Drinks</p>
            </Divider>
          </Segment>
          <Segment>
            <Label pointing="below" size="big" color="orange">
              Specials
            </Label>
            <p>
              {donuts.map((data) => (
                <List key={data.item_id}>
                  <List.Item className="listItemDiv">
                    <List.Item>
                      {data.name}
                      ..................................................................................................................................................................................................................................................................................................................
                      <List.Content floated="right">{data.price}</List.Content>
                    </List.Item>
                  </List.Item>
                </List>
              ))}
            </p>
          </Segment>
        </Container>
      </div>
    </>
  );
};

export default Menue;
