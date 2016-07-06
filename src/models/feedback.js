module.exports = {
  namespace: 'feedback',
  state: {
    messages: [
      {msg: 'Welcome to this little demo! It is meant to demonstrate three things:', error: false},
      {msg: '1) How to use choo + Firebase', error: false},
      {msg: '2) How to use authentication in a choo app', error: false},
      {msg: '3) How awesome choo is', error: false}
    ]
  },
  reducers: {
    dismiss: (data, state) => ({
      messages: state.messages.filter((msg, i) => data.num !== i)
    }),
    displayError: (data, state) => ({messages: state.messages.concat({ msg: data.error, error: true })}),
    displayMessage: (data, state) => ({messages: state.messages.concat({ msg: data.message, error: false })})
  }
}
