const lipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const ramsay_bolton = {
  "id": 13,
  "first_name": "ramsay",
  "last_name": "bolton",
  "avatar": "https://vignette.wikia.nocookie.net/ironthronerp/images/d/db/RamsayBolton.jpeg/revision/latest?cb=20150812201804"
}

export const generateChatLog = (user) => {
  let i = randomInRange(4, 20);
  let log = [];
  while (i--) {
    const isOdd = (i % 2) === 1;
    if (isOdd) {
      log.push(generateFakeMessage(user));
    } else {
      log.push(generateFakeMessage(ramsay_bolton));
    }
  }
  return log;
};

function randomInRange(from, to) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}

function generateFakeMessage(owner) {
  return {
    owner,
    message: lipsum.substring(randomInRange(4, 14), randomInRange(20, 40))
  }
};
