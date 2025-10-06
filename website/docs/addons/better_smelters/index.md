---
id: better-smelters
title: Better Smelters
sidebar_label: Better Smelters
---

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
  <img 
    src="/img/addons/better_smelters/better_smelters_render.png" 
    alt="Better Smelters Render"
    width="40%"
    style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.25)" }}
  />
  <div>
    <h2>Overview</h2>
    <p>
      The <b>Better Smelters</b> addon introduces a variety of improved furnaces crafted from ores 
      and rare materials. Each tier smelts faster and consumes less fuel, allowing players to 
      process resources more efficiently as they progress through the game.
    </p>
    <p>
      These upgraded smelters can be used manually or fully automated using hoppers, chests, and other item transport systems.
    </p>
  </div>
</div>

---

## Furnace Tiers & Stats

| Furnace Tier | Fuel Consumption | Smelting Speed |
|---------------|------------------|----------------|
| **Oak Wood Furnace** | 1.0x | Normal |
| **Copper Furnace** | 1.0x | 1.5x |
| **Iron Furnace** | 1.0x | 2x |
| **Netherrack Furnace** | 0x | 2x |
| **Gold Furnace** | 0.8x | 3x |
| **Emerald Furnace** | 0.6x | 5x |
| **Diamond Furnace** | 0.4x | 10x |
| **Amethyst Furnace** | 0.4x | 15x |
| **Netherite Furnace** | 0.2x | 20x |
| **Blazing Furnace** | 0.1x | 25x |
| **Nether Star Furnace** | 0.01x | 10x (1 Stack per Cycle) |

> ⚠ Lower fuel consumption means fuel lasts longer.  
> For example, a furnace with `0.1x` fuel consumption gets **10x more smelts** per fuel item than a regular furnace.

---

## How They Work

Smelters function exactly like vanilla furnaces but support **full automation**:

- **Input items:** Pulled automatically from the container on the **left**.  
- **Fuel:** Pulled from the **top** container.  
- **Output:** Sent to the container on the **right**, if there’s space.

This system allows you to set up complete smelting lines that run on their own.

<p align="center">
  <img 
    src="/img/addons/better_smelters/smelter_setup_placeholder.png"
    alt="Automation Setup Example"
    width="70%"
    style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.25)" }}
  />
</p>

---

## Crafting Recipes

<Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
  <div>
    <img src="/img/addons/better_smelters/copper_furnace_recipe.png" alt="Copper Furnace Recipe" />
    <p className="legend">Copper Furnace Recipe</p>
  </div>
  <div>
    <img src="/img/addons/better_smelters/iron_furnace_recipe.png" alt="Iron Furnace Recipe" />
    <p className="legend">Iron Furnace Recipe</p>
  </div>
  <div>
    <img src="/img/addons/better_smelters/gold_furnace_recipe.png" alt="Gold Furnace Recipe" />
    <p className="legend">Gold Furnace Recipe</p>
  </div>
  <div>
    <img src="/img/addons/better_smelters/netherite_furnace_recipe.png" alt="Netherite Furnace Recipe" />
    <p className="legend">Netherite Furnace Recipe</p>
  </div>
</Carousel>

> 🧱 The **Netherite Furnace** can be crafted using either a **Diamond Furnace** or an **Amethyst Furnace** as part of the recipe.

---

## Additional Info

- The **Netherrack Furnace** does **not consume fuel**.  
- The **Wood Furnace** disappears after a few minutes of use.  
- Supports full automation with hoppers and containers.  
- Perfect for large-scale smelting setups or late-game automation bases.

---

<p align="center">
  <a href="https://discord.gg/YvzPqJZTNd" target="_blank">
    <img 
      src="/img/addons/better_smelters/discord_placeholder.png"
      alt="Dorios Studios Discord"
      width="40%"
      style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.25)" }}
    />
  </a>
</p>

<p align="center">
  <i>Join our Discord to follow updates, share ideas, and report bugs!</i>
</p>
