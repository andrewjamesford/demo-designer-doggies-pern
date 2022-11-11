# Designer Doggies
![Home page of designer dogs](designer-doggies.png)
---

## Getting Started

**To run the app:**

```zsh
docker-compose up --build
```

**To run the server-side tests:**

```zsh
docker-compose -f docker-compose.test.yml up --build
```

<sup>Note: You will notices that some of the tests will fail. This is intentional.</sup>

**To run the client-side tests:**

```zsh
cd client
npm install
npm test
```

---
