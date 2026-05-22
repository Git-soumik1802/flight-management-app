interface SeatItemProps {
  seatNumber: string;
  isAvailable: boolean;
  isSelected: boolean;
  seatClass: "economy" | "business" | "first";
  onSelect: () => void;
}

export default function SeatItem({
  seatNumber,
  isAvailable,
  isSelected,
  seatClass,
  onSelect,
}: SeatItemProps) {
  const getSeatColor = () => {
    if (!isAvailable) {
      return "bg-gray-700 cursor-not-allowed";
    }

    if (isSelected) {
      return "bg-blue-600";
    }

    if (seatClass === "first") {
      return "bg-purple-600";
    }

    if (seatClass === "business") {
      return "bg-yellow-500 text-black";
    }

    return "bg-green-600";
  };

  return (
    <button
      disabled={!isAvailable}
      onClick={onSelect}
      className={`h-12 w-12 rounded-lg text-sm font-semibold transition hover:scale-105 ${getSeatColor()}`}
    >
      {seatNumber}
    </button>
  );
}