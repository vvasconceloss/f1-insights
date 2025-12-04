import { FaAnglesUp, FaAnglesDown } from "react-icons/fa6";

export const DriverMovement = ({ position, grid }: { position: number; grid: number }) => {
  const difference = grid - position

  if (difference === 0) return null

  const positions_gained = difference > 0

  return (
    <span className={`flex items-center text-xs ${positions_gained ? "text-green-500" : "text-red-500"}`}>
      {Math.abs(difference)}
      {positions_gained ? <FaAnglesUp className="w-2 h-2" /> : <FaAnglesDown className="w-2 h-2" />}
    </span>
  )
}