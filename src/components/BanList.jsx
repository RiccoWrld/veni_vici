const BanList = ({ banList, toggleBan }) => {
  return (
    <div className="ban-list">
      <h2>🚫 Ban List</h2>
      {banList.length === 0 ? (
        <p>No attributes banned yet.</p>
      ) : (
        <ul>
          {banList.map((value, i) => (
            <li key={i} onClick={() => toggleBan(value)}>
              ❌ {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BanList;
