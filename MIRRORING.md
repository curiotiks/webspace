# China-friendly mirror

This repo is set up so **GitHub stays the source of truth**, and a **mirror can be automatically updated** on every push to `main`.

## Why you need a mirror

GitHub Pages and common third-party hosts can be slow or unreliable from mainland China, and some external dependencies are frequently blocked. The site in this repo intentionally avoids blocked dependencies (no Google Fonts, no external CDNs).

## Recommended mirror options

### Option A (recommended): Tencent COS static hosting (with optional CDN)

- Good reach from mainland China (especially with CDN acceleration).
- Works well with GitHub Actions.
- No need to mirror git history — just upload the built static output.

**GitHub Actions secrets (required)**

- `TENCENT_SECRET_ID`
- `TENCENT_SECRET_KEY`
- `TENCENT_COS_BUCKET` (example: `mybucket-12345678`)
- `TENCENT_COS_REGION` (example: `ap-hongkong`, `ap-shanghai`)

Once those are set, the `deploy_tencent_cos_mirror` job in `.github/workflows/deploy.yml` runs automatically.

### Option B: Alibaba Cloud OSS static hosting (with optional CDN)

- Also a good mainland option.
- Slightly more operational overhead (endpoint, CNAME requirements depending on region/account).

**GitHub Actions secrets (required)**

- `ALIYUN_OSS_ACCESS_KEY_ID`
- `ALIYUN_OSS_ACCESS_KEY_SECRET`
- `ALIYUN_OSS_ENDPOINT` (example: `https://oss-cn-hangzhou.aliyuncs.com`)
- `ALIYUN_OSS_BUCKET`

Once those are set, the `deploy_aliyun_oss_mirror` job in `.github/workflows/deploy.yml` runs automatically.

## Region / compliance note (ICP)

- **Mainland China regions** typically require **ICP filing** when you bind a custom domain and/or use CDN.
- **Hong Kong regions** are often a good “start here” option to get a mirror online quickly, then you can decide later whether you want to do ICP to maximize performance.

## Workflow file

- `.github/workflows/deploy.yml` deploys GitHub Pages and (optionally) a China mirror.
