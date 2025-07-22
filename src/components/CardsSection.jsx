import './css/CardsSection.css';
import {
    CardGroup
} from 'semantic-ui-react';
import {useState} from "react";
import Article from "./Article";
import Tutorial from "./Tutorial";

function CardsSection() {
    const [articles] = useState(
        [
            {
                title: 'How to use React',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 4
            },
            {
                title: 'Beginners guide to HTML + CSS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 3
            },
            {
                title: 'Why JS is crucial for web development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 5
            }
        ]
    );

    const [tutorials] = useState(
        [
            {
                title: 'HTML Guide',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 4
            },
            {
                title: 'CSS Guide',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 3
            },
            {
                title: 'JS Guide',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                    'Architecto consectetur harum, placeat qui rem repellendus saepe.\n' +
                    'A aliquam aspernatur, at eligendi eum fugit id illum iusto natus\n' +
                    'nulla quidem, recusandae saepe totam. Architecto atque, dicta ex\n' +
                    'expedita fugit hic labore, maiores perspiciatis quam quasi repellat\n' +
                    'saepe soluta totam voluptate voluptatibus.',
                img: 'https://placehold.co/400x200',
                rating: 5
            }
        ]
    );

    return (
        <div className="cards__section-container">
            <div className="cards__section-header">
                <h1 className="cards__section-heading">Featured Articles</h1>
            </div>
            <CardGroup className="card-group" itemsPerRow={3}>
                {articles.map((article) => {
                    return (
                        <Article
                            title={article.title}
                            description={article.description}
                            img={article.img}
                            rating={article.rating}
                        />
                    );
                })}
            </CardGroup>
            <button className="cards__section-cta">See all articles</button>
            <div className="cards__section-header">
                <h1 className="cards__section-heading">Featured Tutorials</h1>
            </div>
            <CardGroup className="card-group" itemsPerRow={3}>
                {tutorials.map((tutorial) => {
                    return (
                        <Tutorial
                            title={tutorial.title}
                            description={tutorial.description}
                            img={tutorial.img}
                            rating={tutorial.rating}
                            />
                    );
                })}
            </CardGroup>
            <button className="cards__section-cta">See all tutorials</button>
        </div>
    )
}

export default CardsSection;