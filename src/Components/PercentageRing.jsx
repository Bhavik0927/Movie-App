
const PercentageRing = ({ percent }) => {
  const radius = 40;
  const strokeWidth = 10;
  const viewBox = 100;

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke-dasharray value based on the percentage
  const strokeDasharrayValue = `${circumference} ${circumference}`;
  const strokeDashoffsetValue = circumference - (percent / 100) * circumference;

  return (
    <svg width="60" height="60" viewBox={`0 0 ${viewBox} ${viewBox}`}>
      <circle
        r={radius}
        cx={viewBox / 2}
        cy={viewBox / 2}
        fill="transparent"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <circle
        r={radius}
        cx={viewBox / 2}
        cy={viewBox / 2}
        fill="transparent"
        stroke="green"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharrayValue}
        strokeDashoffset={strokeDashoffsetValue}
        strokeLinecap="round"
        transform={`rotate(-90 ${viewBox / 2} ${viewBox / 2})`}
      />
      <text x="50" y="60" textAnchor="middle" fontSize="25" fontWeight="bold" fill="white">
        {percent}%
      </text>
    </svg>
  );
};

export default PercentageRing;