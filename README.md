# AI Prompt Workspace / AI Prompt 管理工作台

## Overview / 项目简介

AI Prompt Workspace is a prototype dashboard for organising, testing and comparing prompts. The current version is mainly a frontend demo with mock data: it includes pages for a prompt library, editor, evaluation results, version comparison, test cases and prompt "DNA" analysis.

AI Prompt Workspace 是一个 Prompt 管理与评估工作台原型。当前版本以前端原型为主，使用 mock data 展示 Prompt 库、编辑器、评估结果、版本对比、测试用例和 Prompt 结构分析等页面。

## Why I Built This / 项目背景

I built this as a personal practice project around prompt engineering workflows. I wanted to model how prompts could be treated like versioned project assets rather than loose text snippets.

这个项目是我围绕 prompt engineering 工作流做的个人练习。相比把提示词零散保存在文档里，我希望尝试把它们做成可版本管理、可测试、可对比的项目资产。

## My Contributions / 我的工作

- Built a multi-page Next.js dashboard with sidebar navigation and reusable UI components.
- Designed TypeScript types for prompts, versions, test cases, evaluation metrics and prompt DNA traits.
- Created mock data to demonstrate prompt scoring, version comparison and test-case results.
- Added a small FastAPI backend scaffold with a health endpoint.
- Added Docker Compose configuration for a local PostgreSQL database, ready for future persistence work.

- 使用 Next.js 搭建多页面 Dashboard，包括侧边栏导航和可复用 UI 组件。
- 设计 Prompt、版本、测试用例、评估指标和 Prompt DNA 的 TypeScript 类型。
- 编写 mock data，用于展示评分、版本对比和测试结果页面。
- 搭建 FastAPI 后端骨架，包含基础健康检查接口。
- 添加 Docker Compose PostgreSQL 配置，为后续接入真实数据存储做准备。

## Tech Stack / 技术栈

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend scaffold: FastAPI, Uvicorn
- Local infrastructure: Docker Compose, PostgreSQL

## Features / 主要功能

- Prompt library with tags and status labels.
- Prompt editor page with variables and metadata.
- Evaluation dashboard with metric breakdowns.
- Version comparison view.
- Test-case result view.
- Prompt DNA analysis mock view.
- Settings page for API and workflow preferences.

## Results / 项目成果

The project currently works as an interface prototype. It shows the screens and data model for a prompt-management workflow, but persistence and real model calls are not implemented yet.

当前项目是一个可运行的界面原型，已经展示了 Prompt 管理工作流的页面结构和数据模型。真实数据库持久化、模型调用和用户账户还没有完成。

## How to Run / 如何运行

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

## Screenshots / Results Preview

TODO: add screenshots for the dashboard, prompt editor and evaluation pages.

## Future Improvements / 后续改进

- Connect the frontend to the FastAPI backend.
- Store prompts, versions and test cases in PostgreSQL.
- Add real prompt evaluation runs through a selected model provider.
- Add authentication if the tool becomes multi-user.
- Export prompt reports for portfolio or team review.

## What I Learned / 我的收获

This project helped me think about prompt engineering as a workflow problem: versioning, testing and comparison matter as much as the prompt text itself.

这个项目让我意识到 Prompt 工程不只是写一句提示词，还包括版本管理、测试评估、对比分析和复用流程。后续如果继续做，可以把前端原型逐步接到真实后端。
