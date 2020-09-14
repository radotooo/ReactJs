function expandedForm(num) {
  let numArr = [...(num + "")].map(Number).reduce((a, b) => {
    return (a += b);
  }, []);
  console.log(numArr);
}

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
