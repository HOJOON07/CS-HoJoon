export const Button = () => {
  const isAuthenticated = true;
  return (
    <div className="space-y-2">
      {isAuthenticated ? (
        <button>button입니다~</button>
      ) : (
        <>
          <button>button 입니다.</button>
          <button>button 입니다.</button>
        </>
      )}
    </div>
  );
};
