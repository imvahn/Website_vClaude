// Convert pixel-space cx/cyBase/offsetY to world-space [x, y, z].
// At z=0, 1 world unit = 1 pixel (camera placed so frustum height === vh).
export function toW(cx, cyBase, offsetY, vw, vh, z = 0) {
  return [cx - vw / 2, -(cyBase + offsetY - vh / 2), z]
}
