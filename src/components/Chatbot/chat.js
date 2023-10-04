import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    if (!window.kommunicate) {
      var kommunicateSettings = {
        appId: '1c17c6b9d2fe12d21f59b373504162cb3',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = kommunicateSettings;
    }
  }

  render() {
    return (
      <div>
        <h1>This is our chatbot</h1>
      </div>
    );
  }
}

export default Chat;
