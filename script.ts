const hello = ({ user1, user2 }: user) => {
  console.log(user1.name, "is brother of ", user2.name);
};
interface user {
  user1: {
    name: string;
    email: string;
  };
  user2: {
    name: string;
    email: string;
  };
}

const user1 = {
  name: "aung aung",
  email: "aung@gmail.com",
};
const user2 = {
  name: "maung maungtun",
  email: "maung@gmail.com",
};
hello({ user1, user2 });
