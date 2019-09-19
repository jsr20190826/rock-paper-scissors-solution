$(function () {
  let userScore = 0
  let botScore = 0
  const choices = ['rock', 'paper', 'scissors']

  $('#rock').click(function () {
    const botChoice = generateBotChoice()

    compare('rock', botChoice)
  })

  $('#scissors').click(function () {
    const botChoice = generateBotChoice()

    compare('scissors', botChoice)
  })

  $('#paper').click(function () {
    const botChoice = generateBotChoice()

    compare('paper', botChoice)
  })

  function generateBotChoice () {
    // generate random index from 0 to 2 to extract random computer choice
    // from the choices array
    return choices[Math.floor(Math.random() * choices.length)]
  }

  function compare (userChoice, botChoice) {
    if (userChoice === botChoice) {
      let userResult = 'tie'
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'rock' && botChoice === 'scissors') {
      let userResult = 'win'
      userScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'rock' && botChoice === 'paper') {
      let userResult = 'lose'
      botScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'paper' && botChoice === 'rock') {
      const userResult = 'win'
      userScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'paper' && botChoice === 'scissors') {
      const userResult = 'lose'
      botScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'scissors' && botChoice === 'paper') {
      const userResult = 'win'
      userScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'scissors' && botChoice === 'rock') {
      const userResult = 'lose'
      botScore++
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else {
      console.log('something wrong happened!')
    }

    function printScore () {
      $('#humanScore').text(userScore)
      $('#computerScore').text(botScore)
    }

    function printMessage (userChoice, botChoice, userResult) {
      let message = (
        `<p>
          You played <strong> ${userChoice}</strong>.
          The bot played <strong>${botChoice}</strong>.
        </p>`
      )

      if (userResult === 'win') {
        message = message + ' <p>You Win! :)</p>'
      } else if (userResult === 'lose') {
        message = message + ' <p>You Lose :( </p>'
      } else {
        message = message + ' <p>You tied</p>'
      }

      $('#status').html(message)
    }
  }
})
