# Batuta Assignment

## Setup

### Environment Variables

Create a `.env.local` file in the `backend` directory of your project and add the following environment variables:

```plaintext
API=your_omdb_api_key
```

create `.env` file which has Database connection string to evaluate prisma migrations

```
DATABASE_URL=database@localhost
```

Now just run
```bash
./up.sh
```

so everything will run smoothly