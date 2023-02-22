function VisualState(){
// set de error en loading states voor dit component

    function fetchData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const number = Math.floor(Math.random() * 7);
              if (number > 3) {
                reject(new Error('Error status!'));
              } else {
                resolve();
              }
            }, 1000);
          });
        }

        // Maak alleen het visuele beschikbaar afhankelijk van de type status
    return <>
            <h2>Visual State</h2>
            <button type='sumbit' onClick={fetchData}>Sumbit</button>
            <p>Loading...</p>
            <p>Error: Something is wrong!</p>
        </>
}

export default VisualState;