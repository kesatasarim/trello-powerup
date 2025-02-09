/* Trello Power-Up Başlatma */
window.TrelloPowerUp.initialize({
  "card-buttons": async function (t, options) {
    return [
      {
        icon: "https://trello-powerup-eight.vercel.app/timer.png", 
        text: "Zaman Takibi",
        callback: async function (t) {
          return await t.popup({
            title: "Zaman Takibi",
            url: "https://trello-powerup-eight.vercel.app/timer.html",
            height: 250
          });
        }
      }
    ];
  }
});
