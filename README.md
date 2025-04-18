## Инструменты

- **Node.js:** v20.18.0
- **pnpm:** 10.6.5

## Backend

### 1. Работа с переменными окружения
Скопировать пример:
```bash
cp .env.example .env
```

### 2. Установка зависимостей
```bash
pnpm install
```

### 3. Запуск БД через Docker
```bash
pnpm start-db
```

### 4. Запуск сервера в режиме разработки
```bash
pnpm dev
```

---

## HardHat (Ethereum)

- Перейти в папку smart-contract:
  ```bash
  cd ./smart-contract
  ```
- Установить зависимости:
  ```bash
  pnpm install
  ```

### Компиляция контрактов
```bash
pnpm compile
```

### Запуск локальной сети
```bash
pnpm node
```

---

Если нужна подробная инструкция по какому-то из пунктов или помощь с ошибкой — уточни, и я помогу!