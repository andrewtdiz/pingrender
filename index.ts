const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const ping = (url: string) =>
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log(`[${formatDate(new Date())}]`, response);
          console.warn(`[${formatDate(new Date())}] Network response was not ok`);
        } else console.log(`[${formatDate(new Date())}] Ping successful`);
      })
      .catch((error) => {
        console.error(`[${formatDate(new Date())}] Error pinging endpoint:`, error);
      });
  
  function startPinging() {
    console.log(`[${formatDate(new Date())}] Pinging endpoint...`);
    ping(process.env.URL ?? "");
    ping("https://elevenmcp.onrender.com/ping");
  
    setInterval(() => {
      console.log(`[${formatDate(new Date())}] Pinging endpoint...`);
      ping(process.env.URL ?? "");
      ping("https://elevenmcp.onrender.com/ping");
    }, 5 * 60 * 1000);
  }
  
  startPinging();
  
