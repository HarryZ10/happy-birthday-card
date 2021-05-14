import { Component } from 'react'

export default class Typer extends Component {

    //  arguments to pass through Typer
    static defaultProps = {
      dataText: []
    }
  
    // text, isDeleting, loop number of times, typing speed
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 210
      }
    }
  
    // calls function to handle type
    componentDidMount() {
      this.handleType();
    }
  
    // calculate typing effect
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      // speed of deleting text (turned off for now)
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });
  
      // if text is empty due to deletion
      if (isDeleting && text === '') {
        
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
        
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return this.state.text;
      
    }
  }
  