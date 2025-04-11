export const MAP_LAYOUT = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 2, 2, 2, 0, 1],
  [1, 0, 0, 2, 2, 2, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 2, 2, 0, 1],
  [1, 0, 0, 2, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Tile size
export const TILE_SIZE = 65;

// Define movement directions
export const DIRECTIONS = [
  { dx: 1, dy: 0 }, // Right
  { dx: -1, dy: 0 }, // Left
  { dx: 0, dy: 1 }, // Down
  { dx: 0, dy: -1 }, // Up
];

export enum TileType {
  Floor,
  Wall,
  Obstacle,
}
