let timer;

    function startTimer() {
      
      const durationInput = document.getElementById('duration').value;
      console.log("durationInput", durationInput)
      const hours= durationInput.split(":")[0]
      const min= durationInput.split(":")[1]
      const second= durationInput.split(":")[2]


      console.log("time", hours, min,  second)

      const duration = parseInt(durationInput);
      console.log(duration);

      if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid positive number for the duration.");
        return;
      }

      
      clearInterval(timer);

      
      // let timeRemaining = duration;
      // console.log({timeRemaining})

      let m =min, h=hours ,s = second

      setInterval(function() {
        h--
      },3600000 );
      setInterval(function() {
        m--;
      }, 60000);
      setInterval(function() {
        s--;
      }, 1000);

       setInterval(function() {
        document.getElementById('timer').innerText = `Time remaining: ${h}: ${m}: ${s} seconds`;

        if (hours === h && second===s && min===m) {
          clearInterval(timer);
          document.getElementById('timer').innerText = 'Timer completed!';
        } else {
        }
       }, 1000);

    }