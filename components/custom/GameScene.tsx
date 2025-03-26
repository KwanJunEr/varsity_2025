"use client";
import React, { useEffect, useRef } from "react";
import {
  DIRECTIONS,
  TILE_SIZE,
  MAP_LAYOUT,
  TileType,
} from "@/utils/properties";
import { spriteImages } from "@/data/aiAgentsData";

export default function GameScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.src = "/office.jpeg";

    const sprites = spriteImages.map((sprite) => {
      const img = new Image();
      img.src = sprite.src;
      return {
        ...sprite,
        img,
        currentX: sprite.tileX * TILE_SIZE,
        currentY: sprite.tileY * TILE_SIZE,
        targetX: sprite.tileX * TILE_SIZE,
        targetY: sprite.tileY * TILE_SIZE,
        currentDirection:
          DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
        speed: sprite.speed,
      };
    });

    const isValidMove = (tileX: number, tileY: number) => {
      return (
        tileX >= 0 &&
        tileX < MAP_LAYOUT[0].length &&
        tileY >= 0 &&
        tileY < MAP_LAYOUT.length &&
        MAP_LAYOUT[tileY][tileX] === TileType.Floor
      );
    };

    const moveSprites = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Debugging tiles (uncomment if needed)
      //   MAP_LAYOUT.forEach((row, y) => {
      //     row.forEach((tile, x) => {
      //       if (tile === TileType.Wall) {
      //         context.fillStyle = "rgba(100, 100, 100, 0.5)";
      //         context.fillRect(
      //           x * TILE_SIZE,
      //           y * TILE_SIZE,
      //           TILE_SIZE,
      //           TILE_SIZE
      //         );
      //       } else if (tile === TileType.Obstacle) {
      //         context.fillStyle = "rgba(200, 0, 0, 0.5)";
      //         context.fillRect(
      //           x * TILE_SIZE,
      //           y * TILE_SIZE,
      //           TILE_SIZE,
      //           TILE_SIZE
      //         );
      //       }
      //     });
      //   });

      sprites.forEach((sprite) => {
        const currentTileX = Math.floor(sprite.currentX / TILE_SIZE);
        const currentTileY = Math.floor(sprite.currentY / TILE_SIZE);

        // Reached target tile
        if (
          Math.abs(sprite.currentX - sprite.targetX) < sprite.speed &&
          Math.abs(sprite.currentY - sprite.targetY) < sprite.speed
        ) {
          sprite.currentX = sprite.targetX;
          sprite.currentY = sprite.targetY;

          const validDirections = DIRECTIONS.filter((dir) =>
            isValidMove(currentTileX + dir.dx, currentTileY + dir.dy)
          );
          if (validDirections.length > 0) {
            sprite.currentDirection =
              validDirections[
                Math.floor(Math.random() * validDirections.length)
              ];
            sprite.targetX =
              (currentTileX + sprite.currentDirection.dx) * TILE_SIZE;
            sprite.targetY =
              (currentTileY + sprite.currentDirection.dy) * TILE_SIZE;
          }

          // Random direction change (10% chance, only if not already moving through open space)
          if (Math.random() < 0.1) {
            const validDirections = DIRECTIONS.filter((dir) =>
              isValidMove(currentTileX + dir.dx, currentTileY + dir.dy)
            );
            if (validDirections.length > 0) {
              sprite.currentDirection =
                validDirections[
                  Math.floor(Math.random() * validDirections.length)
                ];
              sprite.targetX =
                (currentTileX + sprite.currentDirection.dx) * TILE_SIZE;
              sprite.targetY =
                (currentTileY + sprite.currentDirection.dy) * TILE_SIZE;
            }
          }
        }

        if (sprite.currentX < sprite.targetX) {
          sprite.currentX = Math.min(
            sprite.currentX + sprite.speed,
            sprite.targetX
          );
        } else if (sprite.currentX > sprite.targetX) {
          sprite.currentX = Math.max(
            sprite.currentX - sprite.speed,
            sprite.targetX
          );
        }
        if (sprite.currentY < sprite.targetY) {
          sprite.currentY = Math.min(
            sprite.currentY + sprite.speed,
            sprite.targetY
          );
        } else if (sprite.currentY > sprite.targetY) {
          sprite.currentY = Math.max(
            sprite.currentY - sprite.speed,
            sprite.targetY
          );
        }

        context.drawImage(
          sprite.img,
          sprite.currentX,
          sprite.currentY,
          TILE_SIZE,
          TILE_SIZE
        );
      });

      requestAnimationFrame(moveSprites);
    };

    image.onload = moveSprites;
  }, []);

  return <canvas ref={canvasRef} width={615} height={665} />;
}
