/* Trello Power-Up Başlatma */
window.TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: "https://unpkg.com/matrikstimer38@1.0.0/timer.png", // İkon URL’si
        text: "Zaman Takibi",
        callback: function (t) {
          return t.popup({
            title: "Zaman Takibi",
            url: "https://unpkg.com/matrikstimer38@1.0.0/timer.html"
          });
        }
      }
    ];
  }
});
