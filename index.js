let today, currentTime, currentYear;
today = new Date(document.lastModified)
currentTime = "Last Updated:: " + (today.getMonth()+1) + "/" + today.getDate + "/" + today.getFullYear() +
 " " + today.getHours() + ":" + today.getMinutes() + today.getSeconds()
document.getElementById("lastUpdated").innerHTML = currentTime
currentYear = today.getFullYear()
document.getElementById("copyright").innerHTML = "&copy; " + currentYear