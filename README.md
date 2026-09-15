# IP-SAKTI frontend

React + Vite chat interface for the SIH26045 IP assistant. It uses the exact v1 contract in `CONTRACT.md`.

## Run

```bash
npm install
cp .env.example .env
npm run dev
```

Set `VITE_API_URL` to the backend base URL. For the provided mock, use `http://localhost:8000` and start `python3 backend/mock_server.py` from the repository root.

The UI sends `question`, `jurisdiction`, `product_type`, and `language` to `/api/ask`; it renders `answer`, `sources`, `confidence`, and the `declined` safety state.
