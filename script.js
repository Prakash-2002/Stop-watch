var startTime, elapsedTime = 0, intervalId;

function start() {
  if (!intervalId) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
  }
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  document.getElementById("display").innerHTML = formatTime(elapsedTime);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  document.getElementById("display").innerHTML = formatTime(elapsedTime);
}

function formatTime(time) {
  var date = new Date(time);
  var hours = date.getUTCHours().toString().padStart(2, "0");
  var minutes = date.getUTCMinutes().toString().padStart(2, "0");
  var seconds = date.getUTCSeconds().toString().padStart(2, "0");
  var milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
