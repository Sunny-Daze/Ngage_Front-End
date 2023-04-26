/* eslint-disable import/no-anonymous-default-export */
export default {
    control: {
      padding:'5',
      marginTop:'0.5rem',
      backgroundColor: '#fff',
      fontSize: 14.5,
      height:'3rem',
      // fontWeight: 'normal',
      '&focused': {
        border: '5px solid red',
      },
    },
  
    '&multiLine': {
      control: {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        minHeight: 50,
      },
      highlighter: {
        padding: 1,
      },
      input: {
        padding: 5,
        // border: 'none',
        // borderBottom: '2px solid #001F54',
        border: '1px solid gray',
        borderRadius: '3px',
        '&focused': {
          borderBottom: '2px solid red'
        }
      },
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: 1,
        border: '2px solid red',
      },
      input: {
        padding: 1,
        // border: '2px inset',
      },
    },
  
    suggestions: {
      list: {
        fontSize: 15,
      },
      item: {
        paddingRight:'10px',
        paddingLeft:'10px',
        '&focused': {
          color:'white',
          backgroundColor: '#001F45',
        },
      },
    },
  }