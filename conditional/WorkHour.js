const currentTime = new Date();
const currentHour = currentTime.getHours();

if (currentHour >= 9 && currentHour < 17) {
    console.log("Working hours");
} else {
    console.log("Off hours");
}
