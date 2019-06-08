import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import Figure from '../../components/Figure/Figure';
import Para from '../../components/Para/Para';
import Header from '../../components/Header/Header';
import PopUp from '../../components/PopUp/PopUp';
import getSchema from './Schema';
import './Page.css';

/**
 * Page component
 * It has two modes edit and view
 */
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // Getting pages data form sessionStorage and finding the current page according to the pageId from params
    const pages = JSON.parse(sessionStorage.getItem('pages')) ? JSON.parse(sessionStorage.getItem('pages')): [];
    const foundIndex = pages.findIndex(data => data.id === this.props.match.params.id);
    let data = {};
    if(foundIndex !== -1) {
      data = pages[foundIndex]
    } else {
      data = {}
    }
    // Pattern for finding if it is edit mode
    const pattern = new RegExp('/edit/');
    // Maintaining original state for the edit mode
    this.originalState = JSON.parse(JSON.stringify(data));
    this.setState({
      popup: {
        showPopup: false,
        currentSchemaKey: null,
        popUpSchema: []
      },
      mode: pattern.test(this.props.match.url) ? 'edit' : 'view',
      data
    });
  }

  /**
   * Function to get the component according to the type
   * @param entry {object} - current blog component data
   * @returns {*} - Component
   */
  getComponentType = (entry) => {
    if(entry.type === 'Section') {
      return <Section key={entry.key} data={entry} mode={this.state.mode} editClick={this.showPopup} deleteClick={this.deleteBlogComponent}/>
    } else if(entry.type === 'Figure') {
      return <Figure key={entry.key} data={entry} mode={this.state.mode} editClick={this.showPopup} deleteClick={this.deleteBlogComponent}/>
    } else if(entry.type === 'Para') {
      return <Para key={entry.key} data={entry} mode={this.state.mode} editClick={this.showPopup} deleteClick={this.deleteBlogComponent}/>
    } else if(entry.type === 'Header') {
      return <Header key={entry.key} data={entry} mode={this.state.mode} editClick={this.showPopup}/>
    }
  };

  /**
   * Function to open popup with the current blog component data
   * @param type {string} - Name of component
   * @param data {object} - Blog component data object
   * @param key {string} - Key of the current component
   */
  showPopup = (type, data, key) => {
    const newPopupData = {
      showPopup: true,
      currentSchemaKey: key,
      popUpSchema: getSchema(type, data)
    };

    this.setState({
      popup: newPopupData
    });
  };

  /**
   * Updates the blog with 2 way binding for the current component
   * @param event
   * @param field {string} - Current field that is updated
   */
  updateBlog = (event, field) => {
    let value = event.target.value;
    const pageData = [...this.state.data.content];
    const foundIndex = pageData.findIndex(data => data.key === this.state.popup.currentSchemaKey);
    let updatedEntry = {...pageData[foundIndex]};
    updatedEntry.value[field] = value;
    pageData[foundIndex] = updatedEntry;
    this.setState({
      data: {
        ...this.state.data,
        content: pageData
      }
    });
  };

  /**
   * Saves the current blog state to the session storage
   */
  saveBlog = () => {
    this.originalState = JSON.parse(JSON.stringify(this.state.data));
    let pages = JSON.parse(sessionStorage.getItem('pages'));
    const foundIndex = pages.findIndex(data => data.id === this.props.match.params.id);
    pages[foundIndex] = Object.assign({}, this.state.data);
    sessionStorage.setItem('pages', JSON.stringify(pages));
    this.setState({
      popup: {
        showPopup: false,
        currentSchemaKey: null,
        popUpSchema: []
      }
    });
  };

  /**
   * Cancels the update and loads the original data back.
   */
  onCancel = () => {
    const data = JSON.parse(JSON.stringify(this.originalState));
    this.setState({
      popup: {
        showPopup: false,
        currentSchemaKey: null,
        popUpSchema: []
      },
      data
    });
  };

  /**
   * Get current component schema when a user selects the component form the dropdown
   * @param type {string} - component type
   * @returns {object} - Object with the default blog component data
   */
  getComponentSchema = (type) => {
    switch (type) {
      case 'Section':
        return {
          type: 'Section',
          key: `${new Date().getTime()}`,
          value: {
            heading: 'Section Heading',
            text: 'Section Content'
          }
        };
      case 'Figure':
        return {
          type: 'Figure',
          key: `${new Date().getTime()}`,
          value: {
            src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
            alt: 'image 123',
            width: '80%',
            height: '400px'
          }
        };
      case 'Para':
        return {
          type: 'Para',
          key: `${new Date().getTime()}`,
          value: {
            text: 'Para Content'
          }
        };
      case 'Header':
        return {
          type: 'Header',
          key: `${new Date().getTime()}`,
          value: {
            text: 'Heading'
          }
        };
    }
  };

  /**
   * Adding a new blog component to the current blog
   * @param event
   */
  addBlogComponent = (event) => {
    const value = event.target.value;
    let pageData = JSON.parse(JSON.stringify(this.state.data.content));
    if(value.trim() !== '') {
      pageData.push(this.getComponentSchema(value));
      this.setState({
        data: {
          ...this.state.data,
          content: pageData
        }
      });
      this.originalState = JSON.parse(JSON.stringify({
        ...this.state.data,
        content: pageData
      }));
      this.updateStore();
    }
  };

  /**
   * Deleting the blog component when user clicks on delete icon
   * @param componentId
   */
  deleteBlogComponent = (componentId) => {
    const pageData = JSON.parse(JSON.stringify(this.state.data.content));
    const updatedEntries = pageData.filter(data => data.key !== componentId);
    this.setState({
      data: {
        ...this.state.data,
        content: updatedEntries
      }
    });
    this.originalState = JSON.parse(JSON.stringify({
      ...this.state.data,
      content: updatedEntries
    }));
    this.updateStore();
  };

  /**
   * Updates the store (sessionStorage) with the updated data
   */
  updateStore = () => {
    let pages = JSON.parse(sessionStorage.getItem('pages'));
    const foundIndex = pages.findIndex(data => data.id === this.originalState.id);
    pages[foundIndex] = JSON.parse(JSON.stringify(this.originalState));
    sessionStorage.setItem('pages', JSON.stringify(pages));
  };

  render() {
    return (
        <div className={this.state.mode === 'edit' ? 'edit-page page' : 'preview-page page'}>
          {this.state && this.state.mode === 'edit' ? <div className='components-container'>
            <label>Add Component:</label>
            <select onChange={this.addBlogComponent.bind(this)}>
              <option value=''>Please Choose...</option>
              <option value='Section'>Section</option>
              <option value='Figure'>Image</option>
              <option value='Para'>Paragraph</option>
            </select>
          </div> : ''
          }
          { this.state && this.state.data && this.state.data.content && this.state.data.content.length ? this.state.data.content.map(entry => {
            return (
                this.getComponentType(entry)
            )
          }) : ''}
          {this.state.popup && this.state.popup.showPopup && this.state.mode === 'edit'?
              <PopUp
                  schema={this.state.popup.popUpSchema}
                  onCancel={this.onCancel}
                  updateBlog={this.updateBlog}
                  onSave={this.saveBlog}
              />
              : null
          }
        </div>
    );
  }
}

export default Page;
