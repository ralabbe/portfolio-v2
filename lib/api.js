export async function sendContactForm(data) {
    const res = await fetch('/api/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    });
   
    if (!res.ok) {
      return JSON.stringify({ 'success' : false });
    }
   
    return res.json();
}