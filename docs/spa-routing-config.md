# SPA Routing Configuration Guide

This document provides SPA routing configurations for various hosting providers to fix 404 errors when refreshing routes.

## Problem

When refreshing a route like `/reference` on a deployed SPA, the server returns 404 because it looks for a static file instead of serving `index.html`.

## Solutions by Provider

### 1. Vercel

**File:** `vercel.json` (already created in root)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### 2. Netlify

**File:** `public/_redirects`

```
/* /index.html 200
```

### 3. Cloudflare Pages

**File:** `public/_redirects`

```
/* /index.html 200
```

### 4. AWS S3 + CloudFront

**File:** Create in S3 bucket static website hosting configuration:

- Index document: `index.html`
- Error document: `index.html`

**CloudFront Error Pages:**

- 403/404 → Response page: `index.html` → Status: 200

### 5. GitHub Pages

**File:** `public/_redirects` (or create in root)

```
/* /index.html 200
```

Note: Requires `gh-pages` package or GitHub Actions for SPA support.

### 6. Firebase Hosting

**File:** `firebase.json`

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 7. Railway

**File:** `public/_redirects`

```
/* /index.html 200
```

### 8. Render

Configure in Dashboard:

- Build Command: `npm run build`
- Static Publish Directory: `dist`
- SPA Routing is enabled by default for static sites.

### 9. Surge.sh

Run with SPA flag:

```bash
npx surge ./dist --domain your-app.surge.sh --spa
```

### 10. Heroku

**File:** `public/_redirects` (needs rewrite buildpack)
Or use `serve` npm package:

```json
{
  "scripts": {
    "start": "serve -s dist -l 3000"
  }
}
```

### 11. DigitalOcean App Platform

Configure in `app.yaml`:

```yaml
alert_rules:
  - rule: cpu
http_port: 8080
instance_count: 1
instance_size_slug: basic-xxs
name: nitisaka
region: singapore
routes:
  - path: /
  - path: /reference
  - path: /reference/*
target_port: 8080
```

### 12. IIS (Windows Server)

**File:** `public/web.config`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### 13. Nginx

**File:** `nginx.conf` or server config

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 14. Apache (including Shared Hosting)

**File:** `.htaccess` (place in `public/` or root folder)

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

> 💡 **Shared Hosting:** Most shared hosting (cPanel, Plesk, Hostinger, etc.) uses Apache. Simply upload `.htaccess` to your public/web root directory.

## Shared Hosting Specific Notes

#### cPanel / Hostinger / Namecheap / GoDaddy

1. Upload `.htaccess` to `public_html/` folder
2. Make sure `mod_rewrite` is enabled (usually default)
3. Build files should be in `public_html/dist/` or similar

#### If .htaccess doesn't work, contact hosting support:

- Ask: "Enable mod_rewrite for my account"
- Ask: "Enable AllowOverride All for my document root"

## Verification

After deployment, verify by:

1. Navigate to a route (e.g., `/reference`)
2. Refresh the page
3. Should show the correct page, not 404

## For This Project

Current provider: **Vercel**

- ✅ `vercel.json` already configured
- 📦 Redeploy to apply changes
