const callBackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    console.log(this);
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDefferedPrompt(ms) {
    console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callBackPrompt.showDefferedPrompt(2000);
