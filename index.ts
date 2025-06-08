const url = process.env.URL ?? "";

const ping = () =>
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        console.warn("Network response was not ok");
      } else console.log("Ping successful");
    })
    .catch((error) => {
      console.error("Error pinging endpoint:", error);
    });

function startPinging() {
  console.log("Pinging endpoint...");
  ping();

  setInterval(() => {
    console.log("Pinging endpoint...");
    ping();
  }, 5 * 60 * 1000);
}

startPinging();
