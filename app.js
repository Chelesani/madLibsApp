let questionTotal = 2;
let questionCounter = 0
let solicitation = `Please enter a`;
  let questionArray = ['year', 'noun', 'time'];

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
   
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
   
    questionTotal--;
    
  }


  let  originalStory = <h2>Yes, you already visited the ${userInputs[0]}</h2>;
  <h2> What's this? Well, the simple explanation is that while you were reading the ${userInputs[0]}, another was being created. </h2>;
  <h2> It happens sometimes. </h2>;
  <h2>Actually, it happens all the time, every second, minute, hour, hundreds, thousands and millions of web pages are created or updated. In the immortal words of Victor Frankenstein: "Actually, it happens all the time, every second, (every nano-second, repeatedly) minute, hour, hundreds, thousands and millions of web pages are created or updated. In the immortal words of Victor Frankenstein: "${userInputs[1]}"</h2>;
  console.log(originalStory);

  alert("Wonderfull! You have finally finished Your funny Computer Story");

  
  console.log(originalStory);
  document.write(originalStory);