var hello = function (_a) {
    var user1 = _a.user1, user2 = _a.user2;
    console.log(user1.name, "is brother of ", user2.name);
};
var user1 = {
    name: "aung aung",
    email: "aung@gmail.com"
};
var user2 = {
    name: "maung maungtun",
    email: "maung@gmail.com"
};
hello({ user1: user1, user2: user2 });
