🎯 Flow Test Sauce Demo (Ideal)
1. auth.setup.ts
Login standard user
Save session
2. login.negative.spec.ts
Locked user
Wrong password
Empty field
3. inventory.spec.ts
Product list visible
Sorting works
4. cart.spec.ts
Add item
Remove item
5. checkout.spec.ts
Checkout end-to-end

Credentials Sauce Demo (Public)

https://www.saucedemo.com/
| User            | Password     |
| --------------- | ------------ |
| standard_user   | secret_sauce |
| locked_out_user | secret_sauce |
| problem_user    | secret_sauce |

Struktur FINAL (CI/CD Friendly)
playwright-sauce-demo/
│
├── .github/
│   └── workflows/
│       └── playwright.yml      # CI pipeline
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
│
├── tests/
│   ├── setup/
│   │   └── auth.setup.ts
│   │
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── login.negative.spec.ts
│   │
│   ├── inventory/
│   │   └── inventory.spec.ts
│   │
│   └── checkout/
│       └── checkout.spec.ts
│
├── pages/
│   ├── login.page.ts
│   ├── inventory.page.ts
│   └── checkout.page.ts
│
├── utils/
│   ├── auth.ts
│   ├── test-tags.ts
│   └── test-data.ts
│
├── storage/
│   └── standard-user.json
│
├── .env.example
├── .gitignore
└── README.md
