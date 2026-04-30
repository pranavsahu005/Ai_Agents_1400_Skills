# Plan 001: Initial Infrastructure & Price Fetcher

## Context
This is the foundational step for the Stock Sentinel mission. We need to set up the project structure, dependency management, and the first tool to fetch raw stock data.

## Objectives
1. Initialize Python project with `uv` or `pip`.
2. Configure `pydantic` models for Stock Data.
3. Create a robust API client tool to fetch stock prices.
4. Establish the testing harness.

## Architecture Decisions
- **Dependency Injection**: The API client will accept an API Key via environment variables (`os.environ`).
- **Schema**: We will use a `StockQuote` Pydantic model to normalize data from the external API to ensure type safety throughout the system.

## Implementation Steps

### Step 1: Project Skeleton
- Create `src/` directory.
- Create `src/tools/` (for external API calls).
- Create `src/models/` (for Pydantic schemas).
- Create `tests/` directory.

### Step 2: Data Models (`src/models/stock.py`)
- Define `StockQuote` class inheriting from `pydantic.BaseModel`.
- Fields: `ticker` (str), `price` (float), `timestamp` (datetime), `volume` (int).

### Step 3: API Tool (`src/tools/market_data.py`)
- **Function**: `fetch_stock_price(ticker: str) -> StockQuote`
- **Logic**: 
    - Check for `ALPHA_VANTAGE_KEY` in env.
    - Make GET request to API.
    - Parse JSON response.
    - Validate with `StockQuote` model.
    - Handle `httpx.HTTPError`.

### Step 4: Testing (`tests/test_market_data.py`)
- Mock the external API call using `respx` or `unittest.mock`.
- Verify that valid JSON returns a valid `StockQuote` object.
- Verify that API errors raise custom exceptions.

### Step 5: Documentation
- Update `CHANGELOG.md` with "feat: Initial project structure and market data tool".

## Verification Strategy
Run `pytest -v`. 
Success means 100% pass rate on mocked API calls.