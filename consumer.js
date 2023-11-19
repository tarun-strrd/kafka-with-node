const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  console.log("Connecting consumer...");

  await consumer.connect();

  console.log("Connected!");

  await consumer.subscribe({ topics: ["riders-updates"], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`Rider location received: ${message.value}`);
    },
  });
}

init();
