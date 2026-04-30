# Project Mission: Gemini Stock Sentinel

## Executive Summary
Build an autonomous agent capable of retrieving real-time stock market data, analyzing recent news sentiment for specific tickers using the Gemini API, and generating a daily briefing report.

## Core Objectives
1.  **Data Ingestion**: Fetch real-time stock prices (OHLCV) via external APIs (e.g., AlphaVantage or Yahoo Finance).
2.  **Sentiment Analysis**: Scrape or fetch recent news headlines for the target ticker and use an LLM to score sentiment (Bullish/Bearish/Neutral).
3.  **Reporting**: Generate a Markdown summary combining price action and sentiment analysis.
4.  **Automation**: Run on a scheduled cron job (GitHub Actions).

## Technical Constraints & Stack
-   **Language**: Python 3.11+
-   **Data Validation**: Pydantic v2 (Strict schemas required)
-   **HTTP Client**: Httpx (Async preferred)
-   **Testing**: Pytest with 90% coverage
-   **Output**: Files saved to `artifacts/reports/`

## Success Metrics
-   Agent can successfully fetch data for 'GOOGL' and 'NVDA'.
-   Sentiment analysis returns a score between -1.0 (Bearish) and 1.0 (Bullish).
-   System handles API rate limits gracefully without crashing.
-   CI/CD pipeline passes all tests and lints on every push.