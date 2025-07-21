import './css/CardsSection.css';
import {Card, CardContent, CardDescription, CardHeader, Image, Rating, CardMeta, Icon, CardGroup} from 'semantic-ui-react';

function CardsSection() {
    return (
        <div className="cards__section-container">
            <div className="cards__section-header">
                <h1 className="cards__section-heading">Featured Articles</h1>
            </div>
            <CardGroup className="card-group" itemsPerRow={3}>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
            </CardGroup>
            <button className="cards__section-cta">See all articles</button>
            <div className="cards__section-header">
                <h1 className="cards__section-heading">Featured Tutorials</h1>
            </div>
            <CardGroup className="card-group" itemsPerRow={3}>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
                <Card>
                    <Image src='https://placehold.co/400x200'  />
                    <CardContent className="card-content">
                        <CardHeader>How to use React</CardHeader>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto consectetur harum, placeat qui rem repellendus saepe.
                            A aliquam aspernatur, at eligendi eum fugit id illum iusto natus
                            nulla quidem, recusandae saepe totam. Architecto atque, dicta ex
                            expedita fugit hic labore, maiores perspiciatis quam quasi repellat
                            saepe soluta totam voluptate voluptatibus.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </CardContent>
                </Card>
            </CardGroup>
            <button className="cards__section-cta">See all tutorials</button>
        </div>
    )
}

export default CardsSection;