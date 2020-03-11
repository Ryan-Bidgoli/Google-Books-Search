import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
//importing API
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
//extending the state object
class App extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    page: 1
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getgooglebooks(this.state.recipeSearch, this.state.page)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };
  //incrementing the page of results
  handleNextPage = event => {
    this.setState({page: this.state.page + 1});
    this.handleFormSubmit(event);
  }  
  //decrementing the page of results
  handlePreviousPage = event => {
    if (this.page > 1) {
      this.setState({page: this.state.page - 1});
      this.handleFormSubmit(event);
    }
  }

  postToDB = (book) => {
    console.log(book)
    var dbBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      synopsis: book.volumeInfo.synopsis,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink
    }

   API.postGoogleBooks(dbBook)
    .then( () => console.log(`You added ${book.title} to your bookshelf`))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.volumeInfo.title}
                        title={recipe.volumeInfo.title}
                        href={recipe.volumeInfo.previewLink}
                        ingredients={recipe.volumeInfo.description}
                        thumbnail={recipe.volumeInfo.imageLinks.thumbnail}
                        books = {recipe}
                        saveBooksClicks = {this.postToDB}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
          <Row>
            <Col size="xs-6">
              <Button
                disabled={this.state.page === 1}
                onClick={this.handlePreviousPage}
                type="success"
                className="input-lg"
              >
                Last Page
              </Button>
            </Col>
            <Col size="xs-6">
              <Button
                onClick={this.handleNextPage}
                type="success"
                className="input-lg"
              >
                Next Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
