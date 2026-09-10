# oxlera.in

Monorepo:

- `oxlera/` — Vite + React marketing site / frontend
- `oxlera-st/` — Strapi 5 CMS (blog content)

## Local development with Docker

```bash
docker compose up --build
```

Services:

| Service    | URL                          | Notes                        |
| ---------- | ---------------------------- | ---------------------------- |
| frontend   | http://localhost:5173        | Vite dev server, HMR         |
| strapi     | http://localhost:1337/admin  | create the admin user first  |
| postgres   | localhost:5432               | user/pass/db all `strapi`    |

Source for both apps is bind-mounted, so edits hot-reload.

### Wiring the blog data

The frontend reads blogs from `${VITE_STRAPI_URL}/api/blogs`. After the stack is
up:

1. Open http://localhost:1337/admin and create the admin account.
2. Either make the API public — Settings → Roles → Public → enable `find` and
   `findOne` on **Blog** — or create a read-only API token
   (Settings → API Tokens), put it in a root `.env` as `VITE_STRAPI_TOKEN=...`
   (see `.env.example`), and run `docker compose restart frontend`.
3. Create and publish a Blog entry, then visit http://localhost:5173/blogs.

Data (Postgres, uploaded media) persists in named volumes across
`docker compose down` / `up`. Use `docker compose down -v` to wipe it.
