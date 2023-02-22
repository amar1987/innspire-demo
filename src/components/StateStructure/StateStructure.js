import { useState } from 'react';

export default function StateStructure() {
// set status voor text en status

  async function handleSubmit(e) {
    // set de huidige status van de zending
    e.preventDefault();
    await sendMessage()
    // set status van de zending
  }

  // Toon bericht als zending is gelukt

  // textarea moet disabled zijn als zending is gelukt
  // en de ingevoerde text moet opgeslagen worden in de state.
  // Verder moet bij een succesvolle zending de knop ook disabled worden.
  // Status van de verzending moet zichtbaar voor de gebruiker zijn.
  return (
    <form onSubmit={handleSubmit}>
      <p>Wat vind je van deze sessie?</p>
      <textarea
      />
      <br />
      <button
        type="submit"
      >
        Send
      </button>
       </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}