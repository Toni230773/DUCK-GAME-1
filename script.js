
<script>
    const text = `Welcome to Arcos Playa, Mallorca!\n\nWe’re delighted to welcome you to Arcos Playa, your home away from home in beautiful Mallorca. Nestled just steps from the beach, our resort offers the perfect blend of relaxation and vibrant holiday energy.\n\nFrom the moment you arrive, you’ll feel the charm of our laid-back atmosphere and friendly service. Whether you're here to unwind or explore, we have something for everyone. Spend your days lounging by our inviting pool, soaking up the Mediterranean sun with your favorite drink in hand from the bar. Our bartenders are always ready to craft your perfect cocktail or pour a refreshing local wine or cold beer.\n\nFeeling hungry? Our bar serves up a delicious variety of meals—from fresh Mediterranean favorites to hearty international dishes—prepared with quality ingredients and a touch of island flavor. Whether you're enjoying breakfast with a sea breeze or a sunset dinner, every bite is a delight.\n\nWe invite you to relax, indulge, and make the most of your stay. If there's anything you need, our team is always here to help.\n\nWelcome again, and enjoy every moment at Arcos Playa!`;

    const bubble = document.getElementById("bubble");
    let index = 0;

    function typeText() {
      if (index < text.length) {
        bubble.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
        index++;
        setTimeout(typeText, 40);
      }
    }

    window.onload = typeText;
  </script>
</body>
</html>
