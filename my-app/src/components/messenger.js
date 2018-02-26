import React, {Component} from 'react'
import '../css/app.css'
import avatar from '../images/avatar.png'
import classNames from 'classnames'
// import Store from '../components/store.js'
import {ObjectID} from '../helpers/objectid.js'
import _ from 'lodash'

class Messenger extends Component {

   constructor(props) {
     super(props);

     this.state = {
       height: window.innerHeight,
       newMessage: ''
     }
     this._onResize = this._onResize.bind(this);
     this.addTestMessages = this.addTestMessages.bind(this);
     this.handleSend = this.handleSend.bind(this);
   }

   handleSend() {
     const {newMessage} = this.state;
     const {store} = this.props;

     const currentUser = store.getCurrentUser();

     const messageId = new ObjectID().toString();
     const message = {
       _id: messageId,
       body: newMessage,
       author: _.get(currentUser, 'name', null),
       avatar: avatar,
       me: true,
     };
    store.addMessage(messageId, message);

    this.setState({
      newMessage: '',
    })
   }

   _onResize() {
      this.setState({
        height: window.innerHeight
      });
   }

  componentDidMount() {
     window.addEventListener('resize', this._onResize);
     this.addTestMessages();
  }

  componentWillUnmount() {
     window.removeEventListener('resize', this._onResize);
  }

  addTestMessages() {
    const {store} = this.props;

    for(let i = 0; i < 5; i++) {
      let isMe = false;

      if(i % 3 === 0) {
        isMe = true;
      }
      const newMsg = {
        _id: `${i}`,
        author: `Johnny Depp`,
        body: `Hello there, I like tutles`,
        avatar: avatar,
        me: isMe,
      }
      store.addMessage(i, newMsg);
    }
  }

  render() {
    const {store} = this.props;
    const {height} = this.state;
    const style = {
       height: height,
    }

    const messages = store.getMessages();

    return (
         <div style={style} className="app-messenger">
            <div className="header">
               <div className="left">
                  <div className="actions">
                     <button>New Message</button>
                  </div>
               </div>
               {/* <div className="middle"><h1></h1></div> */}
               <div className="right">
                  <div className="user-bar">
                     <div className="profile-name">Johnny Depp</div>
                     <div className="profile-image"><img src={avatar} alt='avatar'/></div>
                  </div>
               </div>
            </div>
            <div className="main">
               <div className="sidebar-left">
                   <div className="channels">
                      <div className="channel">
                         <div className="channel-user-image">
                            <img src={avatar} alt='avatar'/>Johnny Depp
                         </div>
                      </div>
                      <div className="channel">
                         <div className="channel-user-image">
                            <img src={avatar} alt='avatar'/>Cameron Diaz
                         </div>
                      </div>
                      <div className="channel">
                         <div className="channel-user-image">
                            <img src={avatar} alt='avatar'/>Brad Pitt
                         </div>
                      </div>
                      <div className="channel">
                         <div className="channel-user-image">
                            <img src={avatar} alt='avatar'/>Kate Winslet
                         </div>
                      </div>
                      <div className="channel">
                         <div className="channel-user-image">
                            <img src={avatar} alt='avatar'/>Natalie Portman
                         </div>
                      </div>
                   </div>
               </div>
               <div className="content">
                  <div className="messages">
                     {messages.map((message,index) => {
                        return (
                           <div key={index} className={classNames('message', {'me': message.me})}>
                              <div className="message-user-image">
                                 <img src={avatar} alt='avatar'/>
                              </div>
                              <div className="message-body">
                                 <div className="message-author">{message.me ? 'You ' : message.author}:</div>
                                 <div className="message-text">
                                    <p>{message.body}</p>
                                 </div>
                             </div>
                          </div>
                        )
                     })}
                  </div>
                  <div className="messenger-input">
                     <div className="text-input">
                        <textarea onKeyUp={(event) => {
                            if(event.key === 'Enter') {
                               this.handleSend();
                            }
                        }} onChange={(event) => {
                            this.setState({newMessage: _.get(event, 'target.value')});

                      }} value={this.state.newMessage} placeholder="Message here..." />
                     </div>
                     <div className="text-actions">
                        <button onClick={this.handleSend} className="send">Send</button>
                    </div>
                  </div>
                  </div>
               <div className="sidebar-right">
                  <div className="member-title">Members</div>
                  <div className="members">
                     <div className="member">
                         <div className="member-user-image">
                            <img src={avatar} alt='avatar'/>Cameron Diaz <p>Joined: 2 days ago.</p>
                         </div>
                     </div>
                     <div className="member">
                         <div className="member-user-image">
                            <img src={avatar} alt='avatar'/>Johnny Depp <p> is currently active.</p>
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    )
  }
}

export default Messenger
