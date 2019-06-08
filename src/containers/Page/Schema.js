/**
 * Used to return the schema for the popup
 * @param type {string} - Name of component
 * @param data {object} - Blog component data object
 * @returns {array} - array of objects
 */
const getSchema = (type, data) => {
  if(type === 'Section') {
    return [
      {
        label: 'Heading',
        field: 'heading',
        type: 'text',
        value: data.heading
      },
      {
        label: 'Content',
        field: 'text',
        type: 'textarea',
        value: data.text
      }
    ];
  } else if(type === 'Figure') {
    return [
      {
        label: 'Image src',
        field: 'src',
        type: 'text',
        value: data.src
      },
      {
        label: 'Alt text',
        field: 'alt',
        type: 'text',
        value: data.alt
      },
      {
        label: 'Width',
        field: 'width',
        type: 'text',
        value: data.width
      },
      {
        label: 'Height',
        field: 'height',
        type: 'text',
        value: data.height
      }
    ]
  } else if(type === 'Para') {
    return [
      {
        label: 'Content',
        field: 'text',
        type: 'textarea',
        value: data.text
      }
    ]
  } else if(type === 'Header') {
    return [
      {
        label: 'Header Text',
        field: 'text',
        type: 'text',
        value: data.text
      }
    ]
  }
  return [];
};

export default getSchema;
