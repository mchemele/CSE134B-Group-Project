import {OrderedMap} from 'immutable'
import _ from "lodash"

export default class Store {
  constructor(ContactComponent) {
    this.app = ContactComponent;
    this.messages = new OrderedMap();
    this.channels = new OrderedMap();
    this.user = {
      _id: 0,
      name: 'Johnny',
      created: new Date(),
    }
  }

  getCurrentUser() {
    return this.user;
  }

  addMessage(id, message = {}) {
    this.messages = this.messages.set(`${id}`, message);
    const channelId = _.get(message, 'channelId');
    if(channelId) {
      const channel = this.channels.get(channelId);
      channel.message = channel.message.set(id, true);
      this.channels = this.channels.set(channelId, channel);
    }
    this.update();
  }

  getMessages() {
    return this.messages.valueSeq();
  }

  addChannel(index, channel = {}) {
    this.channels = this.channels.set(index, channel);
  }

  getChannels() {
    return this.channels.valueSeq();
  }

   update() {
     this.app.forceUpdate();
   }

}
