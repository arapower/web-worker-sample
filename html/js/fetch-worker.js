self.addEventListener('message', async function (e) {
  await fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(data => {
    postMessage(data.image);
  });
})
