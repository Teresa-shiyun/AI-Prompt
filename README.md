# AI Prompt Workspace / AI Prompt 工作区

## Overview / 项目简介

AI Prompt Workspace is a prompt-management prototype for organising, testing and comparing prompt versions. The current repository is mainly a frontend demo with mock data, plus a small FastAPI backend scaffold.

AI Prompt Workspace 是一个 Prompt 管理工作区原型，用来整理、测试和比较不同版本的提示词。当前仓库主要是前端演示，使用 mock data 展示界面和数据结构，同时保留了一个很小的 FastAPI 后端骨架。

## Why I Built It / 项目背景

I built this as a personal practice project around prompt engineering workflows. I wanted to explore how prompts could be treated like project assets: versioned, tested, compared and documented, instead of being kept as loose text snippets.

我做这个项目是为了练习 prompt engineering 的实际工作流。相比把提示词随手放在文档里，我想尝试把 Prompt 当成可以管理的项目资产：有版本、有测试结果、有对比记录，也有清楚的说明。

## Features / 功能

- Prompt library with tags, status labels and metadata.
- Editor, evaluation, comparison, test-case and settings screens.
- Mock prompt scores, versions and evaluation results.
- TypeScript models for prompts, versions, metrics, test cases and prompt traits.
- FastAPI backend scaffold with a health endpoint.
- Docker Compose configuration for local PostgreSQL, prepared for future persistence work.

- Prompt 库页面，包含标签、状态和基础元数据。
- 编辑器、评估结果、版本对比、测试用例和设置页面。
- 使用 mock data 展示评分、版本和测试结果。
- 用 TypeScript 定义 Prompt、版本、指标、测试用例和 Prompt 特征等结构。
- FastAPI 后端骨架，目前只有基础健康检查接口。
- Docker Compose 本地 PostgreSQL 配置，后续可以用于真实持久化。

## Tech Stack / 技术栈

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend scaffold: FastAPI, Uvicorn
- Local infrastructure: Docker Compose, PostgreSQL

## Current Status / 当前状态

Frontend demo / working prototype. The UI and data model are in place, but real persistence, authentication and live model evaluation are not implemented yet.

当前是前端演示和可运行原型。页面结构和数据模型已经完成，但还没有接入真实数据库持久化、用户登录或真实 LLM 评估流程。

## How to Run / 本地运行

Run the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open <http://localhost:3000>.

Run the backend scaffold:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Optional local PostgreSQL:

```bash
cp .env.example .env
docker compose -f infra/docker-compose.yml --env-file .env up
```

本地运行时可以先只启动前端。后端和 PostgreSQL 目前主要用于后续扩展，不影响前端 mock demo 的浏览。

## Screenshots / 项目截图

![AI Prompt Workspace dashboard](docs/assets/ai-prompt-dashboard.png)

## Limitations / 当前限制

- Prompt data is currently mocked in the frontend.
- The backend does not yet store prompts or run evaluations.
- No user accounts, team workflow or permission model.
- No real LLM provider is connected in the current prototype.

- 当前 Prompt 数据来自前端 mock data。
- 后端还没有保存 Prompt，也没有执行真实评估。
- 暂时没有用户账号、团队协作或权限设计。
- 当前版本还没有接入真实模型服务。

## Roadmap / 后续计划

- Connect the frontend to the FastAPI backend.
- Store prompts, versions and test cases in PostgreSQL.
- Add real evaluation runs through a selected model provider.
- Add exportable prompt reports.
- Add tests for core data transformations and API routes.

- 将前端页面接到 FastAPI 后端。
- 使用 PostgreSQL 保存 Prompt、版本和测试用例。
- 接入模型服务，执行真实 Prompt 评估。
- 增加可导出的 Prompt 报告。
- 为数据转换和 API 路由补充测试。

## What I Learned / 我的收获

This project helped me think about prompt engineering as a workflow problem. Versioning, test cases and comparison views can matter as much as the prompt text itself.

这个项目让我意识到 Prompt 工程不只是写提示词，还包括版本管理、测试、对比和复盘。对一个可复用的 Prompt 来说，这些流程和提示词内容本身一样重要。

## License / 许可证

MIT. See [LICENSE](LICENSE).
