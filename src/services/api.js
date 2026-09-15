const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

export async function askIpSakti(payload) {
  const response = await fetch(`${API_BASE}/api/ask`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error('Unable to reach IP-SAKTI right now.');
  return response.json();
}

export { API_BASE };
