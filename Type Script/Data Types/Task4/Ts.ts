function yesOrNo(val: number | string) : "Yes" | "No" {
    if (typeof val === 'number') {
        return val > 10 ? "Yes" : "No";
      } else {
         return "No";
      }
    }
  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False