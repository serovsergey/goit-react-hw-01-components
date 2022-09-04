import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Container from "./Container/Container";

export const App = () => {
  return (
    // <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    // >
    <>
      <section>
        <Container>

          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </section>

      <section>
        <Container>
          <Statistics title="Upload stats" stats={data} />
        </Container>
      </section>

      <section>
        <Container>
          <Statistics stats={data} />
        </Container>
      </section>

      <section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </section>

      <section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </section>
    </>
    // </div>
  );
};
