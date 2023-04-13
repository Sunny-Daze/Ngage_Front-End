/* eslint-disable import/no-anonymous-default-export */
export default {
    control: {
      // backgroundColor: '#fff',
      backgroundColor: 'white',
      fontSize: 16,
      // fontWeight: 'normal',
      '&focused': {
        border: '50px solid red',
      },
    },
  
    '&multiLine': {
      control: {
        fontFamily: 'courierNew',
        minHeight: 60,
      },
      highlighter: {
        padding: 9,
        // border: '1px solid transparent',
      },
      input: {
        padding: 5,
        // border: '1px solid silver',
        border: 'none',
        borderBottom: '1px solid silver',
      },
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: 1,
        // border: '2px inset transparent',
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