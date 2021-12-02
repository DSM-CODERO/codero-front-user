const bad = ['tlqkf', 'TLQKF', 'sex'];

export const BadTextFilter = (name) => {
  // for (let i = 0; i < bad.length(); i++) {
  bad.map((bad) => {
    if (name.match(bad)) {
      alert('사용할 수 없는 단어가 포함되어 있습니다');
      return false;
    }
  });
  return true;
};
