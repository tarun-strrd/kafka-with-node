const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("Connecting producer...");
  await producer.connect();
  console.log("producer Connected!");

  await producer.send({
    topic: "riders-updates",
    messages: [
      {
        key: "location-update",
        value: JSON.stringify({
          rider_id: 1,
          latitude: 42.0,
          longitude: -72.0,
        }),
        partition: 0,
      },
    ],
  });
  producer.disconnect();
  console.log("producer Disconnected!");
}

init();
