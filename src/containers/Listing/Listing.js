import React, { Component } from 'react';
import Table from '../../components/Table/Table';

/**
 * Admin page component
 * Lists all the pages
 * Allows user to create a new page/blog
 * Allows user to edit, view or delete existing pages
 */
class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    // Getting the initial state from the sessionStorage
    this.setState({
      pages: JSON.parse(sessionStorage.getItem('pages'))
    });
  }

  /**
   * Add a new page/blog with the default components
   */
  addPage = () => {
    let pages = Object.assign([], this.state.pages);
    const newPage = {
      id: `${pages.length + 1}`,
      content: [
        {
          type: 'Header',
          key: 'Header' + new Date().getTime(),
          value: {
            text: 'Heading'
          }
        },
        {
          type: 'Section',
          key: 'Section' + new Date().getTime(),
          value: {
            heading: 'Section Heading',
            text: 'Section Content'
          }
        },
        {
          type: 'Figure',
          key: 'Figure' + new Date().getTime(),
          value: {
            src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
            alt: 'image 123',
            width: '80%',
            height: '400px'
          }
        }
      ]
    };
    pages.push(newPage);
    sessionStorage.setItem('pages', JSON.stringify(pages));
    this.setState({ pages });
  };

  /**
   * Delete the page/blog
   * @param blogId {string} - current blogId
   */
  deleteBlog = (blogId) => {
    let pages = JSON.parse(sessionStorage.getItem('pages'));
    const filteredPages = pages.filter((page) => {
      return page.id !== blogId;
    });
    sessionStorage.setItem('pages', JSON.stringify(filteredPages));
    this.setState({ pages: filteredPages });
  };

  render() {
    return (
       <div className="App-table">
         { this.state.pages &&
           <Table
               data={this.state.pages}
               addClick={this.addPage}
               onDelete={this.deleteBlog}
           />
         }
        </div>
    );
  }
}

export default Listing;
