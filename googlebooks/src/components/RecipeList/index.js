import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import AddBookBtn from "../AddBookBtn";
import RemoveBookBtn from "../RemoveBookBtn";
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href,
  books,
  saveBooksClicks 
}) {
  console.log(saveBooksClicks)
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Info: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              view book details
            </a>
            <Row>
              <Col size = "xs-4 ">
              <AddBookBtn books={books}  savebooks={saveBooksClicks } >save</AddBookBtn> 
              </Col>
              <Col size = "xs-4">
            <RemoveBookBtn>delete</RemoveBookBtn>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
