const BackgroundCircuits = () => (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <circle cx="50%" cy="50%" r="80" fill="none" stroke="#00ffff" strokeWidth="2" opacity="0.3" />
        <circle cx="50%" cy="50%" r="60" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.2" />
        <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#00ffff" strokeWidth="1" opacity="0.2" />
        <line x1="50%" y1="50%" x2="10%" y2="70%" stroke="#00ffff" strokeWidth="1" opacity="0.2" />
        <circle cx="70%" cy="40%" r="5" fill="#00ffff" opacity="0.3" />
        <circle cx="30%" cy="60%" r="8" fill="#00ffff" opacity="0.2" />
      </svg>
    </div>
  );
  
  export default BackgroundCircuits;
  