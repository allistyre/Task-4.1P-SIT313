import {Card, CardContent, CardDescription, CardHeader, Image, Rating} from 'semantic-ui-react';

function Article({title, description, img, rating})
{
    return (
        <Card>
            <Image src={img}  />
            <CardContent className="card-content">
                <CardHeader>{title}</CardHeader>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Rating icon='star' defaultRating={rating} maxRating={5} />
            </CardContent>
        </Card>
    )
}

export default Article;