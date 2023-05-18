const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/customers/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.getElementById('logoutNav').addEventListener('click', logoutHandler);