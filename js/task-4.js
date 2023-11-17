let getTotalBalanceByGender = (users, gender) => {
    let totalGenderBalance = 0;
    for (var user in users) {
            if (users[user].gender === gender) {
                totalGenderBalance = totalGenderBalance + users[user].balance;
            }
        }
    return totalGenderBalance;
}


const allUsersTask4 = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsersTask4, "male")); // 12053
console.log(getTotalBalanceByGender(allUsersTask4, "female")); // 8863

