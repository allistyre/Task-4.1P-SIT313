import {Grid, Segment, GridColumn, Header, List, ListItem, ListIcon} from "semantic-ui-react";

function Footer() {
    return (
        <footer>
            <Segment inverted padded='very' textAlign='center'>
                <Grid columns={3} stackable>
                    <GridColumn>
                        <Header size='large' inverted>Explore</Header>
                        <List link inverted>
                            <ListItem as='a'>Home</ListItem>
                            <ListItem as='a'>Questions</ListItem>
                            <ListItem as='a'>Articles</ListItem>
                            <ListItem as='a'>Tutorials</ListItem>
                        </List>
                    </GridColumn>
                    <GridColumn>
                        <Header size='large' inverted>Support</Header>
                        <List link inverted>
                            <ListItem as='a'>FAQs</ListItem>
                            <ListItem as='a'>Help</ListItem>
                            <ListItem as='a'>Contact Us</ListItem>
                        </List>
                    </GridColumn>
                    <GridColumn>
                        <Header size='large' inverted>Stay connected</Header>
                        <List link inverted>
                            <ListItem as='a'>
                                <ListIcon name="facebook" size={"large"}/>
                                Facebook
                            </ListItem>
                            <ListItem as='a'>
                                <ListIcon name="twitter" size={"large"}/>
                                Twitter
                            </ListItem>
                            <ListItem as='a'>
                                <ListIcon name="instagram" size={"large"}/>
                                Instagram
                            </ListItem>
                        </List>
                    </GridColumn>
                </Grid>
                <Segment inverted padded='very' textAlign='center'>
                    <Header size='huge'>© Dev@Deakin 2022</Header>
                    <List link inverted horizontal size='medium' relaxed='very'>
                        <ListItem as='a'>Privacy Policy</ListItem>
                        <ListItem as='a'>Terms</ListItem>
                        <ListItem as='a'>Code of Conduct</ListItem>
                    </List>
                </Segment>
            </Segment>
        </footer>
    )
}

export default Footer;