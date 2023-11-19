const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Connecting...");
  await admin.connect();
  console.log("Connected!");
  console.log("Creating topics...");
  await admin.createTopics({
    topics: [
      {
        topic: "riders-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Created!");
  await admin.disconnect();
  console.log("Disconnected admin!");
}

init();
