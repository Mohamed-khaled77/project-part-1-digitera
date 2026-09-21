# Figma MCP Integration

This project uses [Figma's remote MCP server](https://mcp.figma.com/mcp) as the canonical design source.  
The server is pre-configured in [`.mcp.json`](../.mcp.json) at the project root.

---

## Quick Start (per-developer, one-time)

### Antigravity IDE (this IDE)
The `.mcp.json` at the project root is picked up automatically.  
When you open a chat session you will be prompted to authenticate with your Figma account via OAuth.  
No personal token or local secret is required.

### VS Code (with GitHub Copilot / MCP support)
1. Open **Command Palette** → `MCP: Open User Configuration`
2. The project-level `.mcp.json` will be merged automatically — nothing extra needed.
3. Click **Start** next to the `figma` entry and complete OAuth.

### Cursor
1. Open **Command Palette** → **Cursor Settings** → **Tools & MCP**
2. The project `.mcp.json` is detected automatically.
3. Complete the OAuth flow when prompted.

---

## Using Figma Context in AI Chat

1. In Figma, right-click any layer/frame → **Copy link to selection**.
2. Paste that URL directly into your AI chat prompt:

   ```
   Build the ProductCard component from this Figma frame:
   https://www.figma.com/design/abc123/Storefront?node-id=42-7
   ```

3. The MCP server resolves the design data (tokens, layout, component hierarchy) and returns it as structured context to the model.

---

## Fallback: Local Desktop Server

If the remote server is unstable or you work in an air-gapped environment:

1. Open **Figma Desktop** → **Preferences** → enable **"Enable local MCP Server"**.
2. Update `.mcp.json` to use the local URL:

   ```json
   {
     "mcpServers": {
       "figma": {
         "url": "http://127.0.0.1:3845/mcp",
         "type": "http"
       }
     }
   }
   ```

   > **Do not commit** this change — it is machine-specific.

---

## Canonical Design File

Set `FIGMA_FILE_URL` in your `.env.local` (see [`.env.example`](../.env.example)) to record the main Figma project URL for scripts and tooling.

---

## Access & Limits

| Figma Seat | Daily MCP Requests |
|---|---|
| Full / Dev | Higher quota |
| View / Collab | Lower quota |

Contact the design lead if you need seat upgrades.
