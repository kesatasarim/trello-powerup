/* Trello Power-Up Başlatma */
window.TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: "https://trello-powerup-eight.vercel.app/timer.png", 
        text: "Zaman Takibi",
        callback: function (t) {
          return t.popup({
            title: "Zaman Takibi",
            url: "https://trello-powerup-eight.vercel.app/timer.html"
          });
        }
      }
    ];
  }
});
